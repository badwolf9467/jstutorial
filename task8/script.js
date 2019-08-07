function removecolor() {
    var select = document.getElementById('colorSelect');
    var options = select.options;
    var selectedOption = select.selectedIndex;

    select.removeChild(options[selectedOption]);
}
