
function createTable() {
    var table = document.getElementById('myTable');
    table.innerHTML = "";
    var rows = document.getElementById('rows').value;
    var columns = document.getElementById('column').value;



    for (i = 0; i<rows; i++){
        var r = document.createElement('tr');
        table.appendChild(r);
        for (x = 0; x<columns; x++){
            var c = document.createElement('td');
            var txt = document.createTextNode("witam");
            r.appendChild(c);
            c.appendChild(txt)
        }
    }



}

