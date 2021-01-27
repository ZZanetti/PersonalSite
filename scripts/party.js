
function functionName(){var i = 2000
var s = 1000
var t1 = setTimeout(() => setInterval(function () {
    document.body.style.backgroundColor = "#ff00ff"
},
i), s - 500);
var t2 = setTimeout(() => setInterval(function () {
    document.body.style.backgroundColor = "#ffff00"
},
i), s);
var t3 = setTimeout(() => setInterval(function () {
    document.body.style.backgroundColor = "#00ffff"
},
i), s + 500);

var t4 = setTimeout(() => setInterval(function () {
    document.body.style.backgroundColor = "#f9f9f9"
},
i), s + 1000);
}
