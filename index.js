let imageName = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
let randomImage = Math.floor(Math.random() * imageName.length);
let randomImageName = imageName[randomImage];

let image = new Image();
image.src = 'images/' + randomImageName;

document.body.appendChild(image);