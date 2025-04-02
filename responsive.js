function resizeGame() {
    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    
    if (!container || !canvas) return;

    // 設置目標解析度
    const targetWidth = 1080;
    const targetHeight = 1920;
    
    // 獲取視窗大小
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // 計算縮放比例
    const scaleWidth = windowWidth / targetWidth;
    const scaleHeight = windowHeight / targetHeight;
    const scale = Math.min(scaleWidth, scaleHeight);
    
    // 計算實際尺寸
    const width = Math.round(targetWidth * scale);
    const height = Math.round(targetHeight * scale);
    
    // 設置容器和canvas尺寸
    container.style.width = width + 'px';
    container.style.height = height + 'px';
    
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
}

// 防抖函數
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 添加事件監聽器
const debouncedResize = debounce(resizeGame, 250);
window.addEventListener('load', resizeGame);
window.addEventListener('resize', debouncedResize);
window.addEventListener('orientationchange', () => {
    setTimeout(resizeGame, 300);
});

// 禁用雙擊縮放
document.addEventListener('dblclick', function(e) {
    e.preventDefault();
}, { passive: false });

// 禁用手指縮放
document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

// 添加錯誤處理
window.addEventListener('error', function(e) {
    console.error('Resize error:', e);
}); 
