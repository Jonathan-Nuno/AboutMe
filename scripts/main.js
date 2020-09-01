// image switch

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_0238.jpeg') {
        myImage.setAttribute('src', 'images/o-22.jpeg');
    } else {
        myImage.setAttribute('src', 'images/IMG_0238.jpeg');
    }
}
document.querySelector('button').onclick = function () {
    alert('This button does nothing :(');
}