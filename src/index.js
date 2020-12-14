import EmojiWidget from 'emojiwidget';

function onExtensionClick(tab) {
    console.log('work');
    const inputList = document.querySelectorAll('input');
    for(const input of inputList) {
        new EmojiWidget(input);
        //console.log(input);
    }
}

onExtensionClick();

//chrome.browserAction.onClicked.addListener(onExtensionClick);