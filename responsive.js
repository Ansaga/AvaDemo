function resizeGame() {
    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    
    if (!container || !canvas) return;
    
    var targetRatio = 1080 / 1920;
    var windowRatio = window.innerWidth / window.innerHeight;
    
    var width, height;
    
    // 簡單的比例計算
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
    
    // 設置畫布
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    
    // 居中
    canvas.style.position = 'absolute';
    canvas.style.left = '50%';
    canvas.style.top = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
}

// 只在必要時調整大小
window.addEventListener('load', function() {
    setTimeout(resizeGame, 1000);
});

window.addEventListener('resize', resizeGame);

// 添加錯誤處理
window.addEventListener('error', function(e) {
    console.error('Resize error:', e);
}); 
