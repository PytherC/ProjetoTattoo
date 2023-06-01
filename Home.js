var images = ['fundoprincipal02.png', 'fundoprincipal.png', 'fundoprincipal03.png']; // Define as imagens de fundo
var smallScreenImages = ['fundoprincipal.png', 'fundoprincipal02.png', 'fundoprincipal03.png']; // Define as imagens de fundo caso a tela seja menor que 500px
var mediumScreenImages = ['fundoprincipal.png', 'fundoprincipal02.png', 'fundoprincipal03.png']; // Define as imagens de fundo caso a tela seja 500px até 800px
var largeScreenImages = ['fundoprincipal.png', 'fundoprincipal02.png', 'fundoprincipal03.png']; // Define as imagens de fundo caso a tela seja 800px até 1200px

var currentIndex = 0; // Índice da imagem atual

// Pré-carregar as imagens em segundo plano
preloadImages(images);
preloadImages(smallScreenImages);
preloadImages(mediumScreenImages);
preloadImages(largeScreenImages);

setInterval(changeBackground, 8000);

function changeBackground() {
  var randomImage;
  var screenWidth = window.innerWidth;

  if (screenWidth < 500) {
    randomImage = smallScreenImages[currentIndex];
  } else if (screenWidth >= 500 && screenWidth < 800) {
    randomImage = mediumScreenImages[currentIndex];
  } else if (screenWidth >= 800 && screenWidth < 1200) {
    randomImage = largeScreenImages[currentIndex];
  } else {
    randomImage = images[currentIndex];
  }

  currentIndex = (currentIndex + 1) % images.length; // Atualiza o índice para a próxima imagem

  var backgroundImageUrl = 'url("img/' + randomImage + '")';

  var backgroundSlideshowElement = document.querySelector('.background-slideshow');
  backgroundSlideshowElement.style.backgroundImage = backgroundImageUrl;

  // Remove a classe .zoom-in se já estiver presente
  backgroundSlideshowElement.classList.remove('zoom-in');

  // Aguarda um pequeno intervalo antes de adicionar a classe .zoom-in
  setTimeout(function() {
    // Adiciona a classe .zoom-in para aplicar o efeito de zoom
    backgroundSlideshowElement.classList.add('zoom-in');
  }, 10);
}

function preloadImages(imageArray) {
  for (var i = 0; i < imageArray.length; i++) {
    var img = new Image();
    img.src = 'img/' + imageArray[i];
  }
}


// Aguarde até que o documento esteja totalmente carregado

$(document).ready(function() {
// Selecione todos os links do menu
const menuLinks = document.querySelectorAll('.menu-li a');
      
// Adicione um evento de clique a cada link do menu
menuLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
      
const href = this.getAttribute('href');
const target = document.querySelector(href);
      
if (target) {
const sectionTop = target.offsetTop;
      
window.scrollTo({
top: sectionTop,
behavior: 'smooth'
    });
   }
  });
 });
});


//Jquery

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
