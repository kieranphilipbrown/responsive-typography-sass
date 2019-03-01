// Paragraph
var p = document.getElementById("pSize");
var pFontSize = window.getComputedStyle(document.getElementById("p")).fontSize;
var pInsert = document.getElementById("pSize").innerHTML = pFontSize;
convertToEm(p);

// h1
var h1 = document.getElementById("h1Size");
var h1FontSize = window.getComputedStyle(document.getElementById("h1")).fontSize;
var h1Insert = document.getElementById("h1Size").innerHTML = h1FontSize;
convertToEm(h1);

// h2
var h2 = document.getElementById("h2Size");
var h2FontSize = window.getComputedStyle(document.getElementById("h2")).fontSize;
var h2Insert = document.getElementById("h2Size").innerHTML = h2FontSize;
convertToEm(h2);

// h3
var h3 = document.getElementById("h3Size");
var h3FontSize = window.getComputedStyle(document.getElementById("h3")).fontSize;
var h3Insert = document.getElementById("h3Size").innerHTML = h3FontSize;
convertToEm(h3);

// h4
var h4 = document.getElementById("h4Size");
var h4FontSize = window.getComputedStyle(document.getElementById("h4")).fontSize;
var h4Insert = document.getElementById("h4Size").innerHTML = h4FontSize;
convertToEm(h4);

// h5
var h5 = document.getElementById("h5Size");
var h5FontSize = window.getComputedStyle(document.getElementById("h5")).fontSize;
var h5Insert = document.getElementById("h5Size").innerHTML = h5FontSize;
convertToEm(h5);

// h6
var h6 = document.getElementById("h6Size");
var h6FontSize = window.getComputedStyle(document.getElementById("h6")).fontSize;
var h6Insert = document.getElementById("h6Size").innerHTML = h6FontSize;
convertToEm(h6);


window.addEventListener("resize", function(){

    var p = document.getElementById("pSize");
    var pFontSize = window.getComputedStyle(document.getElementById("p")).fontSize;
    document.getElementById("pSize").innerHTML = pFontSize;
    convertToEm(p);

    var h1 = document.getElementById("h1Size");
    var h1FontSize = window.getComputedStyle(document.getElementById("h1")).fontSize;
    document.getElementById("h1Size").innerHTML = h1FontSize;
    convertToEm(h1);

    var h2 = document.getElementById("h2Size");
    var h2FontSize = window.getComputedStyle(document.getElementById("h2")).fontSize;
    document.getElementById("h2Size").innerHTML = h2FontSize;
    convertToEm(h2);

    var h3 = document.getElementById("h3Size");
    var h3FontSize = window.getComputedStyle(document.getElementById("h3")).fontSize;
    document.getElementById("h3Size").innerHTML = h3FontSize;
    convertToEm(h3);

    var h4 = document.getElementById("h4Size");
    var h4FontSize = window.getComputedStyle(document.getElementById("h4")).fontSize;
    document.getElementById("h4Size").innerHTML = h4FontSize;
    convertToEm(h4);

    var h5 = document.getElementById("h5Size");
    var h5FontSize = window.getComputedStyle(document.getElementById("h5")).fontSize;
    document.getElementById("h5Size").innerHTML = h5FontSize;
    convertToEm(h5);

    var h6 = document.getElementById("h6Size");
    var h6FontSize = window.getComputedStyle(document.getElementById("h6")).fontSize;
    document.getElementById("h6Size").innerHTML = h6FontSize;
    convertToEm(h6);

});

function convertToEm(el) {
    var justNumber = parseInt(el.innerHTML, 10);
    emValue = justNumber / 16 * 1;
    el.innerHTML = el.innerHTML + " or " + emValue + "em";
}
