// Paragraph
var pFontSize = window.getComputedStyle(document.getElementById("p")).fontSize;
var pInsert = document.getElementById("pSize").innerHTML = pFontSize;

// h1
var h1FontSize = window.getComputedStyle(document.getElementById("h1")).fontSize;
var h1Insert = document.getElementById("h1Size").innerHTML = h1FontSize;

// h2
var h2FontSize = window.getComputedStyle(document.getElementById("h2")).fontSize;
var h2Insert = document.getElementById("h2Size").innerHTML = h2FontSize;

// h
var h3FontSize = window.getComputedStyle(document.getElementById("h3")).fontSize;
var h3Insert = document.getElementById("h3Size").innerHTML = h3FontSize;

// h4
var h4FontSize = window.getComputedStyle(document.getElementById("h4")).fontSize;
var h4Insert = document.getElementById("h4Size").innerHTML = h4FontSize;

// h2
var h5FontSize = window.getComputedStyle(document.getElementById("h5")).fontSize;
var h5Insert = document.getElementById("h5Size").innerHTML = h5FontSize;

// h6
var h6FontSize = window.getComputedStyle(document.getElementById("h6")).fontSize;
var h6Insert = document.getElementById("h6Size").innerHTML = h6FontSize;


window.addEventListener("resize", function(h1FontSize){

    var pFontSize = window.getComputedStyle(document.getElementById("p")).fontSize;
    document.getElementById("pSize").innerHTML = pFontSize;

    var h1FontSize = window.getComputedStyle(document.getElementById("h1")).fontSize;
    document.getElementById("h1Size").innerHTML = h1FontSize;

    var h2FontSize = window.getComputedStyle(document.getElementById("h2")).fontSize;
    document.getElementById("h2Size").innerHTML = h2FontSize;

    var h3FontSize = window.getComputedStyle(document.getElementById("h3")).fontSize;
    document.getElementById("h3Size").innerHTML = h3FontSize;

    var h4FontSize = window.getComputedStyle(document.getElementById("h4")).fontSize;
    document.getElementById("h4Size").innerHTML = h4FontSize;

    var h5FontSize = window.getComputedStyle(document.getElementById("h5")).fontSize;
    document.getElementById("h5Size").innerHTML = h5FontSize;

    var h6FontSize = window.getComputedStyle(document.getElementById("h6")).fontSize;
    document.getElementById("h6Size").innerHTML = h6FontSize;

});
