const $btn = document.getElementById("btn-kick");
const $btn_fatality = document.getElementById("btn-fatality");

const character = {
  name: "Pikachu",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-character"),
  elProgressBar: document.getElementById("progressbar-character"),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressBarHP: renderProgressBarHP,
};

const enemy = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-enemy"),
  elProgressBar: document.getElementById("progressbar-enemy"),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressBarHP: renderProgressBarHP,
};

$btn.addEventListener("click", function () {
  console.log("!!! KICK !!!");
  let characterKick = random(20);
  let enemyKick = random(20);

  console.log("character kick = " + characterKick);
  character.changeHP(characterKick);

  console.log("enemy kick = " + enemyKick);
  enemy.changeHP(enemyKick);
});

$btn_fatality.addEventListener("click", function () {
  console.log("!!! FATALITY !!!");
  let pokArray = [character, enemy];
  let pok = pokArray[randomRound()];
  console.log(pok.name + " получает удар FATALITY = " + pok.damageHP + " !!!");
  pok.changeHP(pok.damageHP);
});

function init() {
  console.log("! START GAME !");
  character.renderHP;
  enemy.renderHP;
}

init();

function renderHP() {
  this.renderHPLife();
  this.renderProgressBarHP();
}

function renderHPLife() {
  this.elHP.innerText = this.damageHP + " / " + this.defaultHP;
}

function renderProgressBarHP() {
  this.elProgressBar.style.width = this.damageHP + "%";
}

function changeHP(count) {
  if (this.damageHP <= count) {
    this.damageHP = 0;
    console.log("Бедный " + this.name + " проиграл бой !");
    $btn.disabled = true;
    $btn_fatality.disabled = true;
    this.renderHP;
    alert("Бедный " + this.name + " проиграл бой !");
  } else {
    this.damageHP -= count;
  }

  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function randomRound() {
  return Math.round(Math.random());
}
