const $btn = document.getElementById("btn-kick");
const $btn_fatality = document.getElementById("btn-fatality");

const character = {
  name: "Pikachu",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-character"),
  elProgressBar: document.getElementById("progressbar-character"),
};

const enemy = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-enemy"),
  elProgressBar: document.getElementById("progressbar-enemy"),
};

$btn.addEventListener("click", function () {
  console.log("!!! KICK !!!");
  let characterKick = random(20);
  console.log("character kick = " + characterKick);
  changeHP(character, characterKick);
  let enemyKick = random(20);
  console.log("enemy kick = " + enemyKick);
  changeHP(enemy, enemyKick);
});

$btn_fatality.addEventListener("click", function () {
  console.log("!!! FATALITY !!!");
  let pokArray = [character, enemy];
  let pok = pokArray[randomRound()];
  console.log(pok.name + " получает удар FATALITY = " + pok.damageHP + " !!!");
  changeHP(pok, pok.damageHP);
});

function init() {
  console.log("! START GAME !");
  renderHP(character);
  renderHP(enemy);
}

init();

function renderHP(person) {
  renderHPLife(person);
  renderProgressBarHP(person);
}

function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + " / " + person.defaultHP;
}

function renderProgressBarHP(person) {
  person.elProgressBar.style.width = person.damageHP + "%";
}

function changeHP(person, count) {
  if (person.damageHP <= count) {
    person.damageHP = 0;
    console.log("Бедный " + person.name + " проиграл бой !");
    $btn.disabled = true;
    $btn_fatality.disabled = true;
    renderHP(person);
    alert("Бедный " + person.name + " проиграл бой !");
  } else {
    person.damageHP -= count;
  }

  renderHP(person);
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function randomRound() {
  return Math.round(Math.random());
}
