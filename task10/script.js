function randomImage() {
    var list = [{link: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"},
        {link: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195" },
        {link: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"}
        ];

    var item = list[Math.floor(Math.random() * list.length)];

    var image = document.getElementById('imag');

    image.src = item.link;
    image.height = item.height;
    image.width = item.width;
}