var images = ['fundo.png', 'tattoofundo.png ', 'tattoofundo2.png']; //Define as imagens de fundo
var smallScreenImages = ['iconewpp.png']; //Define as imagens de fundo caso a tela seja menor que 500px
var mediumScreenImages = ['logo.png']; //Define as imagens de fundo caso a tela seja 500px até 800px
var largeScreenImages = ['iconewpp.png']; //Define as imagens de fundo caso a tela seja 800px ate 1200px

setInterval(changeBackground, 5000);

function changeBackground() {
  var randomIndex;
  var randomImage;
  var screenWidth = window.innerWidth;
  
  if (screenWidth < 500) {
    randomIndex = Math.floor(Math.random() * smallScreenImages.length);
    randomImage = smallScreenImages[randomIndex];
  } else if (screenWidth >= 500 && screenWidth < 800) {
    randomIndex = Math.floor(Math.random() * mediumScreenImages.length);
    randomImage = mediumScreenImages[randomIndex];
  } else if (screenWidth >= 800 && screenWidth < 1200) {
    randomIndex = Math.floor(Math.random() * largeScreenImages.length);
    randomImage = largeScreenImages[randomIndex];
  } else {
    randomIndex = Math.floor(Math.random() * images.length);
    randomImage = images[randomIndex];
  }
  
  document.querySelector('.background-slideshow').style.backgroundImage = 'url("img/' + randomImage + '")';
}
