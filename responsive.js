function resizeGame() {
    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    
    var targetRatio = 1080 / 1920;
    var windowRatio = window.innerWidth / window.innerHeight;
    var pixelRatio = window.devicePixelRatio || 1;
    
    var width, height;
    
    if (windowRatio > targetRatio) {
        // 窗口較寬，以高度為基準
        height = window.innerHeight;
        width = height * targetRatio;
    } else {
        // 窗口較高，以寬度為基準
        width = window.innerWidth;
        height = width / targetRatio;
    }
    
    // 設置容器樣式
    container.style.width = window.innerWidth + 'px';
    container.style.height = window.innerHeight + 'px';
    
    // 設置畫布的實際渲染分辨率（考慮 pixel ratio）
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    
    // 設置畫布的顯示大小
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    
    // 確保畫布居中
    canvas.style.position = 'absolute';
    canvas.style.left = '50%';
    canvas.style.top = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
    
    // 添加平滑縮放
    canvas.style.imageRendering = 'auto';
    canvas.style.webkitImageRendering = 'auto';
}

// 初始調整
window.addEventListener('load', function() {
    // 在 Unity 載入完成後調整大小
    setTimeout(resizeGame, 1000);
});

// 添加節流以避免過於頻繁的調整
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeGame, 100);
}); 
