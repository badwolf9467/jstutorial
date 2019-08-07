function getFormvalue() {
    var form = document.getElementById('form1');
    var txt = "";
    for (i=0; i<form.length; i++){
        if (form.elements[i].value !== 'Submit'){
            txt = txt + form.elements[i].value + "<br/>"
        }
    }


}