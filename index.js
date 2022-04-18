noOfDrums = document.querySelectorAll(".drum").length;//7

for (var i = 0; i < noOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("i am clicked!");
    var eleInnerHtml = this.innerHTML;
    makeSound(eleInnerHtml);
  });
}
document.addEventListener('keypress', function (event) {
  makeSound(event.key);
})


function makeSound(key) {

  switch (key) {
    case 'w': var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a': var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's': var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd': var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j': var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'k': var bass = new Audio('sounds/kick-bass.mp3');
      bass.play();
      break;
    case 'l': var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    default: alert("not selected!");

  }
}

// if (eleInnerHtml = 'w') {
  //   var audio = new Audio('sounds/crash.mp3');
  //   audio.play();
  // }
  // else if (eleInnerHtml = 'a') {
  //   var audio = new Audio('sounds/kick-bass.mp3');
  //   audio.play();
  // }
  // else if (eleInnerHtml = 's') {
  //   var audio = new Audio('sounds/snare.mp3');
  //   audio.play();
  // }
  // else if (eleInnerHtml = 'd') {
  //   var audio = new Audio('sounds/tom-1.mp3');
  //   audio.play();
  // }
  // else if (eleInnerHtml = 'j') {
  //   var audio = new Audio('sounds/tom-2.mp3');
  //   audio.play();
  // }
  // else if (eleInnerHtml = 'k') {
  //   var audio = new Audio('sounds/tom-3.mp3');
  //   audio.play();
  // }
  // else if (eleInnerHtml = 'l') {
  //   var audio = new Audio('sounds/tom-4.mp3');
  //   audio.play();
  // }
