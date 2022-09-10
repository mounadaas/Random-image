
let pictur = document.getElementById("pictures");
let images = [
    "images/cat-01.jpg",
    "images/cat-02.jpg",
    "images/cat-03.jpg",
    "images/cat-04.jpg",
    "images/cat-05.jpg",
    "images/cat-06.jpg",
    "images/cat-07.jpg",
    "images/cat-08.jpg" 
];

function changeimag (images, pictur ) {
    setInterval(function(){
        randomNumber = Math.floor(Math.random() *images.length);
        pictur.src = images[randomNumber];
    },1000)
}
changeimag(images,pictur)