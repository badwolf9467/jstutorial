
function js_style() {
    var list = ['blue', 'green', 'red'];
    var item = list[Math.floor(Math.random()*list.length)];

    var paragraph = document.getElementById('text');
    paragraph.style.color = item;
    paragraph.style.fontSize = Math.floor(Math.random()*10) + 15 +'px';
}

