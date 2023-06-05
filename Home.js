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

setInterval(changeBackground, 10000);

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

// Scroll suave ao clicar no link do "menu-li a"
$(document).ready(function() {
const menuLinks = document.querySelectorAll('.menu-li a');
      
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
 


// Scroll suave ao clicar no link do "menu-mobile a"
$(document).ready(function() {
  const menuLinks = document.querySelectorAll('.menu-mobile a');
        
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


//Anima todos os itens que tem anime na classe, eles aparecem na tela de acordo com o scroll
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

//Nav fixo após sair 70px do topo
$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  var nav = $('.menu-li');

  if (scrollTop > 70) {
      if (!nav.hasClass('fixed-nav')) {
          nav.stop().animate({
              backgroundColor: '#ff0000', // Altere para a cor desejada
              height: '60px' // Altere para a altura desejada
          }, 900); // Defina a duração da animação (em milissegundos)
          nav.addClass('fixed-nav');
      }
  } else {
      if (nav.hasClass('fixed-nav')) {
          nav.stop().animate({
              backgroundColor: 'transparent', // Altere para a cor desejada
              height: '60px' // Altere para a altura original
          }, 600); // Defina a duração da animação (em milissegundos)
          nav.removeClass('fixed-nav');
      }
  }
});


//Ativou o botão "mobile-btn" ao clicar
$(document).ready(function() {
  $('.mobile-btn').click(function() {
    $(this).toggleClass('active');
    $('.menu-mobile').toggleClass('active');
  });
});
