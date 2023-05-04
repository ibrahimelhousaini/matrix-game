
const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const gameTime = 40; 

let score = 0;
let timer = gameTime;


function startGame() {
  startButton.style.display = 'none';

  
  for (let i = 1; i <= 55; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.dataset.index = i;
    square.dataset.color = 'red';
    square.addEventListener('click', handleSquareClick);
    gameBoard.appendChild(square);
  }

  
  const intervalId = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;
    if (timer <= 0) {
      clearInterval(intervalId);
      endGame();
    }
  }, 1000);
}

function handleSquareClick(e) {
  if (e.target.dataset.color === 'red') {
    e.target.dataset.color = 'green';
    e.target.classList.add('hidden');
    score++;
    scoreDisplay.textContent = score;
  }
}

function endGame() {
  gameBoard.innerHTML = '';
  startButton.style.display = 'block';
  score = 0;
  timer = gameTime;
  scoreDisplay.textContent = score;
  timerDisplay.textContent = timer;
}

startButton.addEventListener('click', startGame);

function startGame() {
  startButton.style.display = 'none';

  // create game board
  for (let i = 1; i <= 35; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.dataset.index = i;

    // set initial color to red or green
    const color = Math.random() < 0.2 ? 'green' : 'red';
    square.dataset.color = color;
    square.classList.add(color);

    // add click event listener
    if (color === 'red') {
      square.addEventListener('click', handleSquareClick);
    }

    gameBoard.appendChild(square);
  }

  // start timer
  const intervalId = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;
    if (timer <= 0) {
      clearInterval(intervalId);
      endGame();
    }
  }, 1000);
}

function handleSquareClick(e) {
  if (e.target.dataset.color === 'red') {
    e.target.dataset.color = 'green';
    e.target.classList.add('hidden');
    score++;
    scoreDisplay.textContent = score;
    
    // add audio when square is clicked
    const audio = new Audio('صوت_طلقة_مسدس_Sound_Effects_Pistol_bullet_8_للومنتاجMP3_320K.mp3'); // تغيير مسار الملف الصوتي إلى مسار ملف الصوت الخاص بك
    audio.play();
  }
}



var video = document.getElementById("bg-video");

function pauseVideo() {
  video.pause();
}

function playVideo() {
  video.play();
}


video.onended = function() {
  video.pause();
};

const myAudio = new Audio('Binary_Code_Interface_Sound_Effects_Sci_Fi_Computer_Beeps_Data_Processing.mp3');

startButton.addEventListener('click', () => {
  myAudio.play();
});
const sound = document.getElementById('sound');
sound.volume = 05;





  










