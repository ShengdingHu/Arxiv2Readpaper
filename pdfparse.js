title = chrome.storage.sync.get(['title'], function(result) {
    if (result.title.endsWith(".pdf")){
        var titletext = prompt("Title not parsed, please copy it manually.")
        if (titletext != null){
            var choice = true
        }else{
            var choice = false
        }
    }else{
    var choice = confirm("Search \""+result.title+"\" on ReadPaper?");
    titletext = result.title
    }

if (choice){
    console.log(titletext)
    search_content = `https://readpaper.com/search/${encodeURIComponent(titletext)}`
    console.log(search_content)
    window.open(search_content)
}
})
