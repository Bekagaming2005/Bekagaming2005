var el = document.getElementById('btn-play');
var playing = false;

var player = new Audio('horImg/Колыбельная - Тили-тили-бум.mp3');
player.preload = "auto";
player.addEventListener('ended', function(){ 
  el.innerText = "Done";
  playing = false;
});
el.addEventListener('click', playPause); 

function playPause() {
  if( playing) {
    player.pause();
    el.innerText = "Pause";
  } else {
    player.play();
    el.innerText = "Playing";
  }
  playing = !playing;
}

let num = document.getElementById('num');
num.addEventListener('click', function () {
    alert('+996555604037')
})

let film = document.getElementById('film')
film.addEventListener('click', function () {
    window.scrollTo({
        top: 1100,
        left: 0,
        behavior: 'smooth'
    })
})

let game = document.getElementById('game')
game.addEventListener('click', function () {
    window.scrollTo({
        top: 590,
        left: 0,
        behavior: 'smooth'
    })
})

let about = document.getElementById('about')
about.addEventListener('click', function () {
    window.scrollTo({
        top: 3000,
        left: 0,
        behavior: 'smooth'
    })
})

let bu = document.getElementById('bu');
bu.addEventListener('click', function(){
    let showcase = document.querySelector('.showcase');
    showcase.classList.toggle('active')
})

var accordion = document.getElementById('accordion');
accordion.addEventListener('click', change);
function change(event) {
    var targ = event.target;
    if (targ.tagName !== 'H3') return;
    if (targ.classList.contains('select')) {
        hideAll();
    } else {
        hideAll();
        targ.classList.add('select');
        showText(targ.nextElementSibling);
    }
}
function hideAll() {
    var h3El = accordion.querySelectorAll('h3');
    var divEl = accordion.querySelectorAll('div');
    for (var i = 0; i < h3El.length; i++) {
        h3El[i].classList.remove('select');
    }
    for (var i = 0; i < divEl.length; i++) {
        divEl[i].style.height = '0';
    }
}
function showText(textEl) {
    textEl.style.height = textEl.scrollHeight + 'px';
}



