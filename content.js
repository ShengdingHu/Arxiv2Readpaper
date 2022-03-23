var choice = confirm("Search on ReadPaper?");
console.log(choice)
if (choice){
    var element = document.getElementsByClassName("title mathjax")[0]
    console.log(element)
    titletext = element.textContent.substring(6)
    console.log(titletext)
    search_content = `https://readpaper.com/search/${encodeURIComponent(titletext)}`
    console.log(search_content)
    window.open(search_content)
}