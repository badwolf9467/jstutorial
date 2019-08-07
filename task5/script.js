function insert_Row() {
    var table = document.getElementById('sampleTable');
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var text1 = document.createTextNode("new cell 1");
    var text2 = document.createTextNode("new cell 2");
    cell1.appendChild(text1);
    cell2.appendChild(text2);
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
}