// SVGの存在を詳しく確認
window.addEventListener('load', function() {
    function checkMermaid() {
        console.log('=== Mermaid Debug ===');
        const mermaidElements = document.querySelectorAll('.mermaid');
        
        mermaidElements.forEach(function(el, i) {
            console.log(`Mermaid ${i}:`);
            console.log('  Tag:', el.tagName);
            console.log('  Class:', el.className);
            console.log('  Children:', el.children.length);
            console.log('  First child:', el.firstElementChild?.tagName);
            console.log('  Inner HTML length:', el.innerHTML.length);
            console.log('  Text content length:', el.textContent.length);
            
            // SVGを探す
            const svg = el.querySelector('svg');
            if (svg) {
                console.log('  SVG found!');
                console.log('  SVG width:', svg.getAttribute('width'));
                console.log('  SVG height:', svg.getAttribute('height'));
            } else {
                console.log('  No SVG found');
                // 子要素を詳しく見る
                Array.from(el.children).forEach((child, j) => {
                    console.log(`    Child ${j}: ${child.tagName}`);
                });
            }
        });
    }
    
    // 複数回チェック
    setTimeout(checkMermaid, 1000);
    setTimeout(checkMermaid, 3000);
    setTimeout(checkMermaid, 5000);
});