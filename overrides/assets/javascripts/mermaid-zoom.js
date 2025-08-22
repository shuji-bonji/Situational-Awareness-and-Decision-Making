// Mermaid図ズーム機能
(function() {
    'use strict';
    
    // 処理済みの要素を追跡
    const processedElements = new WeakSet();
    
    // Mermaid要素にズーム機能を追加
    function enableZoom(diagram) {
        // 既に処理済みならスキップ
        if (processedElements.has(diagram) || diagram.hasAttribute('data-zoom-enabled')) {
            return;
        }
        
        // 処理済みとしてマーク
        processedElements.add(diagram);
        diagram.setAttribute('data-zoom-enabled', 'true');
        
        // 要素が有効か確認
        if (diagram.offsetWidth === 0 || diagram.offsetHeight === 0) {
            // サイズがない場合は少し待ってから再試行
            setTimeout(() => {
                if (diagram.offsetWidth > 0 && diagram.offsetHeight > 0) {
                    enableZoom(diagram);
                }
            }, 100);
            return;
        }
        
        diagram.style.cursor = 'zoom-in';
        let isZoomed = false;
        let overlay = null;
        
        // 元のスタイルを保存
        const originalStyles = {
            position: diagram.style.position || '',
            transform: diagram.style.transform || '',
            left: diagram.style.left || '',
            top: diagram.style.top || '',
            zIndex: diagram.style.zIndex || '',
            padding: diagram.style.padding || '',
            margin: diagram.style.margin || '',
            background: diagram.style.background || '',
            boxShadow: diagram.style.boxShadow || '',
            borderRadius: diagram.style.borderRadius || '',
            maxWidth: diagram.style.maxWidth || '',
            maxHeight: diagram.style.maxHeight || '',
            overflow: diagram.style.overflow || '',
            width: diagram.style.width || '',
            height: diagram.style.height || '',
            filter: diagram.style.filter || '',
            display: diagram.style.display || ''
        };
        
        diagram.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            if (!isZoomed) {
                const isDark = document.documentElement.getAttribute('data-md-color-scheme') === 'slate';
                
                // オーバーレイ作成
                overlay = document.createElement('div');
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.95);
                    z-index: 10000;
                    cursor: zoom-out;
                `;
                document.body.appendChild(overlay);
                
                // 元の要素を直接使用して拡大表示
                this.style.position = 'fixed';
                this.style.left = '50%';
                this.style.top = '50%';
                this.style.transform = 'translate(-50%, -50%)';
                this.style.zIndex = '10001';
                this.style.padding = '20px';
                this.style.margin = '0';
                this.style.boxShadow = '0 0 50px rgba(0,0,0,0.8)';
                this.style.borderRadius = '10px';
                this.style.width = '90vw';
                this.style.height = '90vh';
                this.style.overflow = 'auto';
                this.style.display = 'flex';
                this.style.alignItems = 'flex-start';
                this.style.justifyContent = 'flex-start';
                
                // ダークモード対応
                if (isDark) {
                    this.style.background = '#1a1a1a';
                } else {
                    this.style.background = 'white';
                }
                
                // MermaidはSVGを動的に生成するため、内部のSVGのサイズを調整
                // Shadow DOMやslotを使う場合も考慮
                const adjustSVG = () => {
                    // Shadow Root内のSVGを探す（MermaidはShadow DOMを使用）
                    let svg = null;
                    let shadowHost = null;
                    
                    // まず直接のSVGを探す
                    svg = this.querySelector('svg');
                    
                    // Shadow DOM内のSVGを探す
                    if (!svg) {
                        const allElements = this.querySelectorAll('*');
                        for (const el of allElements) {
                            if (el.shadowRoot) {
                                const shadowSvg = el.shadowRoot.querySelector('svg');
                                if (shadowSvg) {
                                    svg = shadowSvg;
                                    shadowHost = el;
                                    break;
                                }
                            }
                        }
                    }
                    
                    if (svg) {
                        // SVGのviewBoxから実際のサイズを取得
                        const viewBox = svg.getAttribute('viewBox');
                        let svgWidth = 800;
                        let svgHeight = 600;
                        
                        if (viewBox) {
                            const [, , width, height] = viewBox.split(' ').map(Number);
                            svgWidth = width || 800;
                            svgHeight = height || 600;
                        }
                        
                        // コンテナのサイズを取得
                        const containerWidth = window.innerWidth * 0.9 - 40;
                        const containerHeight = window.innerHeight * 0.9 - 40;
                        
                        // アスペクト比を維持しながらスケール計算
                        const scaleX = containerWidth / svgWidth;
                        const scaleY = containerHeight / svgHeight;
                        const scale = Math.min(scaleX, scaleY, 1); // 最大1倍まで
                        
                        // SVGのスタイル設定
                        svg.style.width = `${svgWidth * scale}px`;
                        svg.style.height = `${svgHeight * scale}px`;
                        svg.style.display = 'block';
                        svg.style.margin = 'auto';
                        
                        // コンテナを中央配置
                        this.style.display = 'flex';
                        this.style.alignItems = 'center';
                        this.style.justifyContent = 'center';
                        
                        // ダークモードでのSVG調整
                        if (isDark) {
                            svg.style.filter = 'invert(0.9) hue-rotate(180deg) brightness(1.1)';
                        }
                    }
                };
                
                // 即座に適用
                adjustSVG();
                
                // Mermaidの描画完了を待つ
                setTimeout(adjustSVG, 100);
                setTimeout(adjustSVG, 300);
                
                isZoomed = true;
                
                // 閉じる処理
                const closeZoom = () => {
                    // スタイルを元に戻す
                    Object.keys(originalStyles).forEach(key => {
                        this.style[key] = originalStyles[key];
                    });
                    
                    if (overlay) {
                        overlay.remove();
                        overlay = null;
                    }
                    
                    isZoomed = false;
                };
                
                // オーバーレイクリックで閉じる
                overlay.onclick = closeZoom;
                
                // ESCキーで閉じる
                const handleEsc = (e) => {
                    if (e.key === 'Escape') {
                        closeZoom();
                        document.removeEventListener('keydown', handleEsc);
                    }
                };
                document.addEventListener('keydown', handleEsc);
            }
        });
        
        console.log(`Zoom enabled for Mermaid element`);
    }
    
    // 既存のMermaid要素を処理
    function processExistingElements() {
        const mermaidElements = document.querySelectorAll('.mermaid');
        mermaidElements.forEach(enableZoom);
    }
    
    // DOMの変更を監視
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // 追加されたノードをチェック
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // Element node
                    // Mermaidクラスを持つ要素を探す
                    if (node.classList && node.classList.contains('mermaid')) {
                        console.log('New Mermaid element detected');
                        enableZoom(node);
                    }
                    
                    // 子要素にMermaidクラスがあるかチェック
                    if (node.querySelectorAll) {
                        const mermaidElements = node.querySelectorAll('.mermaid');
                        mermaidElements.forEach(enableZoom);
                    }
                }
            });
            
            // 属性の変更もチェック（クラスが追加された場合）
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                if (target.classList && target.classList.contains('mermaid')) {
                    enableZoom(target);
                }
            }
            
            // SVGが.mermaid内に追加された場合もチェック
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeName === 'svg' || node.nodeName === 'SVG') {
                    const parent = node.parentElement;
                    if (parent && parent.classList && parent.classList.contains('mermaid')) {
                        console.log('SVG added to Mermaid element');
                        enableZoom(parent);
                    }
                }
            });
        });
    });
    
    // DOMContentLoadedとloadの両方で初期化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            processExistingElements();
            // body全体を監視開始
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['class']
            });
        });
    } else {
        // 既にロード済みの場合
        processExistingElements();
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class']
        });
    }
    
    // 念のため、window.loadでも実行
    window.addEventListener('load', function() {
        processExistingElements();
    });
})();