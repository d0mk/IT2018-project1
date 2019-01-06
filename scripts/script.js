window.onload = function()
{
    document.getElementById("home_icon").addEventListener("click", function() { loadContent("home"); }, false);

    document.getElementById("button1").addEventListener("click", function() { loadContent("dynamika"); }, false);
    document.getElementById("b1_1").addEventListener("click", function() { loadContent("zasada1"); }, false);
    document.getElementById("b1_2").addEventListener("click", function() { loadContent("zasada2"); }, false);
    document.getElementById("b1_3").addEventListener("click", function() { loadContent("zasada3"); }, false);

    document.getElementById("button2").addEventListener("click", function() { loadContent("chaos"); }, false);
    document.getElementById("b2_1").addEventListener("click", function() { loadContent("chaos_uklady"); }, false);
    document.getElementById("b2_2").addEventListener("click", function() { loadContent("atraktory"); }, false);
    document.getElementById("b2_3").addEventListener("click", function() { loadContent("chaos_przyklady"); }, false);

    document.getElementById("button3").addEventListener("click", function() { loadContent("plyny"); }, false);
    document.getElementById("b3_1").addEventListener("click", function() { loadContent("plyny_zalozenia"); }, false);
    document.getElementById("b3_2").addEventListener("click", function() { loadContent("plyny_dzialy"); }, false);

    document.getElementById("button4").addEventListener("click", function() { loadContent("rozne"); }, false);

    document.getElementById("minus_icon").addEventListener("click", function() { this.classList.add("fonticon"); fontSize(-1); }, false);
    document.getElementById("plus_icon").addEventListener("click", function() { this.classList.add("fonticon"); fontSize(1); }, false);
    document.getElementById("minus_icon").addEventListener("animationend", function() { this.classList.remove("fonticon"); }, false);
    document.getElementById("plus_icon").addEventListener("animationend", function() { this.classList.remove("fonticon"); }, false);

    document.getElementById("frametag").onload = function()
    {
        if (!frameLoaded)
        {
            expandFrame(this);
            frameLoaded = true;
        }
    }

    document.getElementById("home_icon").click();
    
    loadFontElements();
    centerParagraphs();
}

// ukrywanie elementów o ID różnym od "name" oraz wyświetlanie elementów o ID równym "name",
// jeśli ramka jest aktywna przy przechodzeniu do innej sekcji -> ukrywanie ramki
function loadContent(name)
{
    var content = document.getElementsByClassName("sections");

    for (let i = 0; i < content.length; ++i)
    {
        if (content[i].classList.contains(name))
        {
            content[i].style.display = "block";
        }
        else
        {
            content[i].style.display = "none";
        }
    }

    if (frameLoaded && name != "rozne")
    {
        let frame = document.getElementById("frametag");

        frame.style.width = "0";
        frame.style.display = "none";
        frame.style.opacity = "0";

        frameLoaded = false;
    }
}

var fontSizeElements;
var fontChanges = 0;
var frameLoaded = false;

// zmiana rozmiaru czcionki na stronie
function fontSize(value)
{
    value > 0 ? ++fontChanges : --fontChanges;

    fontChanges = fontChanges < -3 ? -3 : fontChanges;
    fontChanges = fontChanges >  3 ?  3 : fontChanges;

    if (fontChanges > -3 && fontChanges < 3)
    {
        for (let i = 0; i < fontSizeElements.length; ++i)
        {
            fontSizeElements[i].style.fontSize = parseInt(window.getComputedStyle(fontSizeElements[i]).getPropertyValue("font-size")) + value + "px";
        }
    }

    let const_font = document.getElementsByClassName("fontchange_letters");

    const_font[0].style.fontSize = "20px";
    const_font[1].style.fontSize = "16px";
    const_font[2].style.fontSize = "12px";
}

// ładowanie elementów o zdefiniowanych tagach oraz usuwanie tych bez zawartości tekstowej
function loadFontElements()
{
    fontSizeElements = Array.from(document.querySelectorAll("p, div, button, a, h1, h2, h3, h4, h5, h6, ul"));

    for (let i = 0; i < fontSizeElements.length; ++i)
    {
        if (fontSizeElements[i].innerHTML == "")
        {
            fontSizeElements.splice(i--, 1);
        }
    }
}

// funkcja centrująca tekst w określonych paragrafach
function centerParagraphs()
{
    let centered = document.getElementsByClassName("center_text");

    for (let i = 0; i < centered.length; ++i)
    {
        centered[i].style.textAlign = "center";
    }
}

// rozszerzanie ramki, gdy jest ładowana
function expandFrame(frame)
{
    frame.style.display = "block";
    frame.style.height = document.getElementById("frame_height").offsetHeight - 10 + "px";
    frame.style.width = "100%";
    frame.style.opacity = "1.0";
}