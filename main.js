let arenas = document.querySelector('.arenas');
let randomButton = document.querySelector('.button');

let player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Меч', 'Пистолет', 'Граната'],
  attack: function() {
    console.log(scorpion.name + ' Fight...')
  }
}

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
   return $tag;
}

let player2 = {
  player: 2,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Меч', 'Пистолет', 'Граната'],
  attack: function() {
    console.log(scorpion.name + ' Fight...')
  }
}


function createPlayer(nameObj) {


  let player = createElement('div', 'player'+nameObj.player);

  let progressBar = createElement('div', 'progressbar');
  let character = createElement('div', 'character');
  let life = createElement('div', 'life');
  let name = createElement('div', 'name');
  let img = createElement('img');
  img.src = nameObj.img

  player.appendChild(progressBar);
  player.appendChild(character);

  progressBar.appendChild(name);
  progressBar.appendChild(life);


  character.appendChild(img);

  life.style.width = nameObj.hp + "%";
  name.innerText = nameObj.name;

  return player;  
}

function changeHP(player) {
  let playerLife = document.querySelector('.player'+ player.player +' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    playerLife.style.width = player.hp + "%";
    console.log(player.hp);



  if (player.hp <= 0) {

    playerLife.style.width = "0%";
    arenas.appendChild(playerLose(player.name));
    randomButton.disabled = true;
  }
}

function playerLose(name) {
  let loseTittle = createElement('div', 'loseTitle');
  if (name == player1.name) {
    loseTittle.innerText = player2.name + " wins";
  } else {
    loseTittle.innerText = player1.name + " wins";
  }
  
  return loseTittle;
 }

randomButton.addEventListener('click', function() {
console.log('Клик');
changeHP(player1);
changeHP(player2);
  
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

