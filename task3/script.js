function changeColor() {
    var colors = ['red', 'green', 'blue'];
    var color = colors[Math.floor(Math.random() * colors.length)];
    var par = document.getElementById('test');
    par.style.backgroundColor = color;
}