
function changeContent() {
    var row = document.getElementById('row').value;
    var column = document.getElementById('column').value;
    var string = document.getElementById('string').value;
    var table = document.getElementById('myTable');

    var x = table.rows[row-1].cells;
    x[column-1].innerHTML = string;





}

