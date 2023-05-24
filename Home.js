var images = ['fundoprincipal02.png', 'fundoprincipal.png ', 'fundoprincipal03.png']; //Define as imagens de fundo
var smallScreenImages = ['fundoprincipal.png', 'fundoprincipal02.png', 'fundoprincipal03.png']; //Define as imagens de fundo caso a tela seja menor que 500px
var mediumScreenImages = ['fundoprincipal.png', 'fundoprincipal02.png', 'fundoprincipal03.png']; //Define as imagens de fundo caso a tela seja 500px até 800px
var largeScreenImages = ['fundoprincipal.png', 'fundoprincipal02.png', 'fundoprincipal03.png']; //Define as imagens de fundo caso a tela seja 800px ate 1200px

setInterval(changeBackground, 4000);

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

$(window).scroll(function() {
  var windowTop = $(this).scrollTop() ;
  $('.anime').each(function(){
      if(windowTop > $(this).offset().top - 550) {
          $(this). addClass ('anime-init');
      } else {
          $(this).removeClass ('anime-init');
      }
  
  });
});
