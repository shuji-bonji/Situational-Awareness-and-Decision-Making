// Mermaid図ズーム機能 - 本番用完成版
(function() {
    'use strict';
    
    window.addEventListener('load', function() {
        // 他のプラグインの処理を待つ
        setTimeout(function() {
            // panzoom-box内のMermaid要素を優先的に探す
            let mermaidElements = document.querySelectorAll('.panzoom-box .mermaid');
            
            // panzoom-boxがない場合は通常のMermaid要素を探す
            if (mermaidElements.length === 0) {
                mermaidElements = document.querySelectorAll('.mermaid');
                console.log('Using standard Mermaid elements');
            } else {
                console.log('Found Mermaid in panzoom-box');
            }
            
            console.log('Total Mermaid elements found:', mermaidElements.length);
            
            mermaidElements.forEach(function(diagram, index) {
                // 既に処理済みならスキップ
                if (diagram.hasAttribute('data-zoom-enabled')) return;
                diagram.setAttribute('data-zoom-enabled', 'true');
                
                // 要素が有効か確認
                if (diagram.offsetWidth === 0 || diagram.offsetHeight === 0) {
                    console.warn(`Mermaid ${index} has no size, skipping`);
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
                    filter: diagram.style.filter || ''
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
                        
                        // 要素を拡大
                        this.style.position = 'fixed';
                        this.style.left = '50%';
                        this.style.top = '50%';
                        this.style.transform = 'translate(-50%, -50%) scale(3)';
                        this.style.transformOrigin = 'center center';
                        this.style.zIndex = '10001';
                        
                        // パディング最適化
                        this.style.padding = '20px';
                        this.style.margin = '0';
                        
                        // ダークモード対応
                        if (isDark) {
                            this.style.background = '#1a1a1a';
                            this.style.filter = 'invert(0.9) hue-rotate(180deg) brightness(1.1)';
                        } else {
                            this.style.background = 'white';
                            this.style.filter = '';
                        }
                        
                        this.style.boxShadow = '0 0 50px rgba(0,0,0,0.8)';
                        this.style.borderRadius = '10px';
                        this.style.maxWidth = '90vw';
                        this.style.maxHeight = '90vh';
                        this.style.overflow = 'auto';
                        
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
                
                console.log(`Zoom enabled for Mermaid ${index}`);
            });
        }, 5000); // 5秒待つ
    });
})();