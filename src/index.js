import EmojiWidget from 'emojiwidget';

//function onExtensionClick(tab) {
    const inputList = document.querySelectorAll('input');
    for(const input of inputList) {
        new EmojiWidget(input);
    }
//}

//chrome.browserAction.onClicked.addListener(onExtensionClick);