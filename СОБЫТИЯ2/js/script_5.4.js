let tabText = "";
tab.addEventListener("mouseover", function (e){
    let tab = event.target;
    tab.style.background = "#17115b";
})
//подсвечиваем при наведении на вкладки при наведении

tab.addEventListener("mouseout", function (e){
    let tab = event.target;
    tab.style.background = "";
})
//убираем подсвечиваение при уходе с вкладки

HTML_tab.addEventListener("click", function (e){
    tabText = "Hypertext Markup Language (HTML) is the standard markup " +
        "language for creating web pages and web applications. With " +
        "Cascading Style Sheets (CSS) and JavaScript, it forms a triad " +
        "of cornerstone technologies for the World Wide Web. <br> <br> Web " +
        "browsers receive HTML documents from a web server or from local " +
        "storage and render the documents into multimedia web pages. HTML " +
        "describes the structure of a web page semantically and originally " +
        "included cues for the appearance of the document."
    second.innerHTML = tabText;
})
//выводим текст при клике на HTML

CSS_tab.addEventListener("click", function (e){
    tabText = "Cascading Style Sheets (CSS) is a stylesheet language " +
        "used to describe the presentation of a document written in HTML " +
        "or XML (including XML dialects such as SVG, MathML or XHTML). " +
        "CSS describes how elements should be rendered on screen, on " +
        "paper, in speech, or on other media. <br> <br> CSS is among " +
        "the core languages of the open web and is standardized across " +
        "Web browsers according to W3C specifications. Previously, the " +
        "development of various parts of CSS specification was done " +
        "synchronously, which allowed the versioning of the latest recommendations"
    second.innerHTML = tabText;
})
//выводим текст при клике на CSS

JS_tab.addEventListener("click", function (e){
    tabText = "JavaScript is a high-level, often just-in-time compiled " +
        "language that conforms to the ECMAScript standard. It has " +
        "dynamic typing, prototype-based object-orientation, and first-" +
        "class functions. It is multi-paradigm, supporting event-driven, " +
        "functional, and imperative programming styles. It has application " +
        "programming interfaces (APIs) for working with text, dates, " +
        "regular expressions, standard data structures, and the Document " +
        "Object Model (DOM)."
    second.innerHTML = tabText;
})
//выводим текст при клике на JS