const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

document.addEventListener('keydown', jump);


function jump(){
    mario.classList.add('mario_jump');

    setTimeout(() => {
        mario.classList.remove('mario_jump');
    }, 500);
}


const loop = setInterval(() => {
    let pipe_position = pipe.offsetLeft;
    let mario_position = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(pipe_position);

    if (pipe_position <= 120 && pipe_position > 0 && mario_position < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipe_position}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${mario_position}px`;
        mario.src = 'images/game-over.png';
        mario.style.width = '80px';
    }

}, 10);