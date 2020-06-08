const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd);
  });

//animation fadeOutLeft on click
$(".works").click(function() {
  const element_home = document.querySelectorAll("ul.sections_home li");
  const sections_works = document.querySelectorAll("ul.sections_works li");
  for (var i = 0; i < 3; i++) {
    element_home[i].classList.add('animate__animated', 'animate__fadeOutLeft');
  }
  for (var i = 0; i < 4; i++) {
    sections_works[i].style.removeProperty('display');
    sections_works[i].style.display = "flex";
    sections_works[i].classList.add('animate__animated', 'animate__fadeInRight');
  }
});

animateCSS('.works', 'fadeInDown', 'animate__');
animateCSS('.contact', 'fadeInDown', 'animate__');
animateCSS('.about', 'fadeInDown', 'animate__');
