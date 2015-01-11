chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.insertCSS({
        file: "style_smoothing.css"
    });
});
