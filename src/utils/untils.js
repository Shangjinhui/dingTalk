export const getPageHeight = () => {
    let height = document.body.scrollHeight;
    console.log(height)
    window.parent.postMessage({
        type: 'iframeHeight',
        height: height
    }, window.origin)
}