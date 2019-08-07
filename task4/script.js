function getAttributes() {
    var element = document.getElementById('w3r');
    var type = element.type;
    var hreflang = element.hreflang;
    var rel = element.rel;
    var href = element.href;
    var target = element.target;
    var list = [type,hreflang, rel, href, target];
    var par = "";
    for (i=0; i<list.length;i++){
        par = par + list[i] + "<br/>";
    }
    document.getElementById('types').innerHTML = par;
}
