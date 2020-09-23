// const animateCSS = (element, animation, prefix = 'animate__') =>
//   // We create a Promise and return it
//   new Promise((resolve, reject) => {
//     const animationName = `${prefix}${animation}`;
//     const node = document.querySelector(element);
//
//     node.classList.add(`${prefix}animated`, animationName);
//
//     // When the animation ends, we clean the classes and resolve the Promise
//     function handleAnimationEnd() {
//       node.classList.remove(`${prefix}animated`, animationName);
//       node.removeEventListener('animationend', handleAnimationEnd);
//
//       resolve('Animation ended');
//     }
//
//     node.addEventListener('animationend', handleAnimationEnd);
//   });
// function removeAnimation() {
//   const element_home = document.querySelectorAll("ul.sections_home li");
//   for (var i = 0; i < 4; i++) {
//     element_home[i].classList.remove('fadeInDownAnim');
//       // element_home[i].style.opacity = "1";
//   }
// }
const element_home = document.querySelectorAll("ul.sections_home li");

element_home[3].addEventListener("webkitAnimationEnd", function() {
  for (var i = 0; i < 4; i++) {
    element_home[i].classList.remove('fadeInDownAnim');
    element_home[i].style.opacity = "1";
  }
}, false);

//animation fadeOutLeft on click
$(".works").click(function() {
  for (var i = 0; i < 4; i++) {
    var j = i + 4;
    element_home[i].classList.add('fadeOutLeftAnim');
    if (j < 7) {
      element_home[j].classList.add('fadeInRightAnim');
      element_home[j].style.pointerEvents = "auto";
    }
  }
});

// animateCSS('.works', 'fadeInDown', 'animate__');
// animateCSS('.contact', 'fadeInDown', 'animate__');
// animateCSS('.about', 'fadeInDown', 'animate__');
// animateCSS('.social', 'fadeInDown', 'animate__');
