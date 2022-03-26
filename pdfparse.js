title = chrome.storage.sync.get(['title'], function(result) {
    var choice = confirm("Search \""+result.title+"\" on ReadPaper?");

if (choice){
    titletext = result.title
    console.log(titletext)
    search_content = `https://readpaper.com/search/${encodeURIComponent(titletext)}`
    console.log(search_content)
    window.open(search_content)
}
})
