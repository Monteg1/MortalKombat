let player1 = {
  name: 'Scorpion',
  hp: "100%",
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Меч', 'Пистолет', 'Граната'],
  attack: function() {
    console.log(scorpion.name + ' Fight...')
  }
}

let player2 = {
  name: 'Kitana',
  hp: "50%",
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Меч', 'Пистолет', 'Граната'],
  attack: function() {
    console.log(scorpion.name + ' Fight...')
  }
}


function createPlayer(p, n) {


  let player = document.createElement('div');
  player.classList.add(p);

  let progressBar = player.appendChild(document.createElement('div'));
  progressBar.classList.add('progressbar')

  let character = player.appendChild(document.createElement('div'));
  character.classList.add('character');

  let life = progressBar.appendChild(document.createElement('div'));
  life.classList.add('life');

  let name = progressBar.appendChild(document.createElement('div'));
  name.classList.add('name');

  let img = document.createElement('img');
  img.src = n.img

  character.appendChild(img);

  life.style.width = n.hp;
  name.innerText = n.name;


  let arenas = document.querySelector('.arenas');
  arenas.appendChild(player);
  

}

createPlayer('player1', player1);
createPlayer('player2', player2);
