function resizeGame() {
    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    
    if (!container || !canvas) return;
    
    var targetRatio = 1080 / 1920;
    var windowRatio = window.innerWidth / window.innerHeight;
    
    // 設置固定的高分辨率渲染
    canvas.width = 2160;
    canvas.height = 3840;
    
    var width, height;
    
    if (windowRatio > targetRatio) {
        height = window.innerHeight;
        width = height * targetRatio;
    } else {
        width = window.innerWidth;
        height = width / targetRatio;
    }
    
    // 設置容器
    container.style.width = window.innerWidth + 'px';
    container.style.height = window.innerHeight + 'px';
    
    // 設置畫布顯示大小
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    
    // 使用更好的縮放品質
    canvas.style.imageRendering = '-webkit-optimize-contrast';
    canvas.style.imageRendering = 'crisp-edges';
    
    // 居中
    canvas.style.position = 'absolute';
    canvas.style.left = '50%';
    canvas.style.top = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
}

// 初始化
window.addEventListener('load', function() {
    setTimeout(resizeGame, 1000);
});

window.addEventListener('resize', resizeGame);

// 添加錯誤處理
window.addEventListener('error', function(e) {
    console.error('Resize error:', e);
}); 
