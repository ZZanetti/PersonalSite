//click start button
//start timer
//alert at end of timer "Time for coffee!"
//display coffee icon and timer

function start(){
    var done = 0;
    var title = document.title;
    var cb = document.getElementById("cb")
    var sty = cb.getAttribute("class")
    var txt = cb.innerHTML

    setTimeout(function(){
        document.title = "Time for a break!"
        alert("Great work! Time for Coffee")
        document.title = title
        cb.setAttribute("class", sty)
        cb.innerHTML = txt 
    }, 2000)
    cb.innerHTML = "working..." //plus timer need to add...
    cb.setAttribute("class", "")
    document.title = title + '(working...)'
}