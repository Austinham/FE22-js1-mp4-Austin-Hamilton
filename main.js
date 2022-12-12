// const cubeAnimation = {
//     targets: '.cube',
//     translateX: -900,
//     rotate: '1turn',
//     loop:true,
//     duration:9000,
//     endDelay:100,
//     rotate: '20turn',
//     easing: 'steps(15)',
    
    
// }

// anime(cubeAnimation);



// ==========================particles animation=================
const container = document.querySelector('.container');
for(let i = 0 ; i <= 5; i++){
    const particles = document.createElement('div');
    particles.classList.add('particles');
    container.appendChild(particles); 
}
const particlesAnimation = {
    targets:'.particles',
     
     delay: function(el, i) { return i * 200 },
     translateX:anime.stagger(10,{grid:[14,5],from:'center',axis:'x'}),
     translateY:anime.stagger(10,{grid:[14,5],from:'center',axis:'Y'}),
     rotateZ:anime.stagger([0,90],{grid:[14,5],from:'center',axis:'x'}),
     delay: anime.stagger(500,{grid:[14,5],from:'center'}),
    autoplay:false,
    loop:true,
    direction:'alternate',
    easing:'easeInOutQuad',
    translateX: {
        value: '*=2.5', 
        duration: 1000
      },
      width: {
        value: '-=20px', 
        duration: 1800,
        easing: 'easeInOutSine'
      },
      rotate: {
        value: '+=2turn',
        duration: 1800,
        easing: 'easeInOutSine'
      },
      direction: 'alternate',
      
    translateX: function(){
        return anime.random(-700, 700)
    },

    translateY: function(){
        return anime.random(-500, 700)
    },
    scale: function(){
        return anime.random(1,1)
    },
    

    
}



// =========btn Selection=======================


const playBtn = document.querySelector('.play')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')

// =================Animation names==================
const playAnime = anime(particlesAnimation);

const resetAnime = anime(particlesAnimation)

// =========================play/pause function===================================
playBtn.addEventListener('click', function(){
    playAnime.play();
    
});

pauseBtn.addEventListener('click', function(){
    playAnime.pause();
   
});
resetBtn.addEventListener('click', function(){
    playAnime.restart();
    playAnime.pause();
   
});


anime(particlesAnimation);

