const nave = document.getElementById('nave');
const alto = screen.height + 'px'
const animation = nave.animate([
      // from
      {
        transform: 'translateY(0px)'
      },
      // to
      {
        transform: `translateY(-${alto})` // 250
      }
    ],{
      duration: 4000,
      delay: 000,
      direction: 'normal',
      easing: 'ease-in-out',
      iterations: Infinity,
      fill: 'forwards' // = 50%
      // endDelay: 5000,
    })

    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const stopButton = document.getElementById('stop');
    const reverseButton = document.getElementById('reverse');

    playButton.addEventListener('click', (event) => {
       if (animation.playState === 'finished'){
        animation.playbackRate = 1
      }
      animation.play();
    });
    pauseButton.addEventListener('click', (event) => {
      animation.pause();
    });
    stopButton.addEventListener('click', (event) => {
      animation.cancel();
    });
    reverseButton.addEventListener('click', (event) => {
      if (animation.playState != 'idle'){
        animation.reverse();
      }
    });