window.addEventListener('keydown',function(e){
    const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return;//this will stop the function from running all together
    audio.currentTime=0;//rewind the start
    audio.play();
    key.classList.add('playing');
})

window.addEventListener('keyup', function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (key) {
        key.classList.remove('playing'); // remove playing class on key release
    }
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return;//skip it if its not ransform
    this.classList.remove('playing');
}

const keys =document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));