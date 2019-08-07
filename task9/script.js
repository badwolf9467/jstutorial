function getOptions() {
    var select = document.getElementById('mySelect');
    var options = select.options;
    var x = "";
    for (var i = 0; i<options.length; i++){
        var f = i + 1;
        x = x + f + "." + options[i].value + ", ";

    }
    alert(x);

}