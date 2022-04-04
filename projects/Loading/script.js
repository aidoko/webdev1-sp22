const loadingBar = document.getElementsByClassName('loading-bar')[0]
setInterval(() => {
    const computedStyle = getComputedStyle(loadingBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    loadingBar.style.setProperty('--width', width + .1)
}, 5)