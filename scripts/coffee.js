//click start button
//start timer
//alert at end of timer "Time for coffee!"
//display coffee icon and timer
var but = document.getElementById("cb")

but.addEventListener("click", function (){
    var defaulttime = 5 * 1000;
    var title = document.title;
    var cb = document.getElementById("cb")
    var sty = cb.getAttribute("class")
    var txt = cb.innerHTML
    var breaktime = 0 + parseInt(document.getElementById("breaktime").value) * 1000
    var actualbreak = (breaktime >= 0) ? breaktime : defaulttime

    setTimeout(function(){
        document.title = "Time for a break! ☕"
        alert("Great work! Time for Coffee")
        document.title = title
        cb.setAttribute("class", sty)
        cb.innerHTML = txt 
    }, actualbreak)
    cb.innerHTML = "working..." //plus timer need to add...
    cb.setAttribute("class", "")
    document.title = title + '(working...)'
})
