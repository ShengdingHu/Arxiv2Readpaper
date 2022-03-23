console.log("Here")
chrome.action.onClicked.addListener((tab) => {
  console.log("Here2")
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});