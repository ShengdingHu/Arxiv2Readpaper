console.log("Here")
chrome.action.onClicked.addListener((tab) => {
  console.log(tab)
  if (tab.url.endsWith(".pdf")){
    chrome.storage.sync.set({title: tab.title });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['pdfparse.js']
    });
  }
  else{
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  }
});