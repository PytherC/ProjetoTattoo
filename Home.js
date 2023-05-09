var images = ['fundo.png', 'tattoofundo.png ', 'tattoofundo2.png',];

setInterval(changeBackground, 5000);

function changeBackground() {
  var randomIndex = Math.floor(Math.random() * images.length);
  var randomImage = images[randomIndex];
  document.querySelector('.background-slideshow').style.backgroundImage = 'url("img/' + randomImage + '")';
}
