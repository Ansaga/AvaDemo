function resizeGame() {
    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    
    var targetRatio = 1080 / 1920;
    var windowRatio = window.innerWidth / window.innerHeight;
    
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
    
    // 設置畫布樣式
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
}

window.addEventListener('load', function() {
    // 確保在Unity實例創建後再調整大小
    setTimeout(resizeGame, 1000);
});
window.addEventListener('resize', resizeGame); 
