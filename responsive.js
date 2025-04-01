function resizeGame() {
    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    
    if (!container || !canvas) return;

    // 設置目標解析度
    const targetWidth = 1080;
    const targetHeight = 1920;
    
    // 計算縮放比例
    const scaleWidth = window.innerWidth / targetWidth;
    const scaleHeight = window.innerHeight / targetHeight;
    const scale = Math.min(scaleWidth, scaleHeight);
    
    // 計算實際尺寸
    const width = targetWidth * scale;
    const height = targetHeight * scale;
    
    // 設置容器尺寸
    container.style.width = width + 'px';
    container.style.height = height + 'px';
    
    // 設置canvas尺寸
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
}

// 初始化
window.addEventListener('load', resizeGame);
window.addEventListener('resize', resizeGame);
window.addEventListener('orientationchange', function() {
    setTimeout(resizeGame, 300);
});

// 添加錯誤處理
window.addEventListener('error', function(e) {
    console.error('Resize error:', e);
}); 
