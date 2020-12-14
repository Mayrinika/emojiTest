chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "index-bundle.js"});
    chrome.tabs.insertCSS(null,{file:"style.css"});
});
