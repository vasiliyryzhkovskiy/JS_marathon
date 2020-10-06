import random from "./utils.js";
// import Pokemon from "./pokemon.js";

const $btn = $getElById("btn-kick");
const $btn_mega_kick = $getElById("btn-mega-kick");
const $btn_fatality = $getElById("btn-fatality");
const $logs = document.querySelector("#logs");

/** Доступное количество ударов */
const $avaibleKiks = 22; //

/** количество ударов */
let $countKiks = 0;

/** Продолжается игра ? */
let $isGameGoing = true;

const simpleKikc = countButtonAkaZarEdition(6, $btn);
const megaKikc = countButtonAkaZarEdition(10, $btn_mega_kick);

const character = {
  name: "Pikachu",
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElById("health-character"),
  elProgressBar: $getElById("progressbar-character"),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressBarHP: renderProgressBarHP,
};

const enemy = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElById("health-enemy"),
  elProgressBar: $getElById("progressbar-enemy"),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressBarHP: renderProgressBarHP,
};

$btn.addEventListener("click", function () {
  console.log("!!! KICK !!!");
  console.log(simpleKikc());
  let characterKick = random(25, 0);
  let enemyKick = random(25, 0);

  console.log("character kick = " + characterKick);
  character.changeHP(characterKick);

  console.log("enemy kick = " + enemyKick);
  enemy.changeHP(enemyKick);
});

$btn_mega_kick.addEventListener("click", function () {
  console.log("!!! MEGA KICK !!!");
  console.log(megaKikc());
  let characterKick = random(60, 20);
  let enemyKick = random(60, 20);

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

function kikcCount() {
  return function () {
    $countKiks = ++$countKiks;
    console.log("Количество ударов всего = " + $countKiks);
    return $countKiks;
  };
}

function changeHP(count) {
  const log =
    this === enemy
      ? generateLog(this, character, count)
      : generateLog(this, enemy, count);
  console.log(log);

  // const kick = kikcCount();
  // if (kick() >= $avaibleKiks) {
  //   $btn.disabled = true;
  //   $btn_fatality.disabled = true;
  //   alert("Закончилось количество ударов !!!");
  // }

  if (this.damageHP <= count || !$isGameGoing) {
    this.damageHP = 0;
    console.log("Бедный " + this.name + " проиграл бой !");

    $btn.disabled = true;
    $btn_mega_kick.disabled = true;
    $btn_fatality.disabled = true;
    this.renderHP;
    alert("Бедный " + this.name + " проиграл бой !");
    $isGameGoing = false;
  } else {
    this.damageHP -= count;
  }

  this.renderHP();
}

function generateLog(firstPerson, secondPerson, count) {
  const { name, damageHP, defaultHP } = firstPerson;
  const {
    name: secondName,
    damageHP: secondDamageHP,
    defaultHP: secondDefaultHP,
  } = secondPerson;

  const logs = [
    `${name} [${damageHP}/${defaultHP}] вспомнил что-то важное, но неожиданно ${secondName} [${secondDamageHP}/${secondDefaultHP}], не помня себя от испуга, ударил в предплечье врага силой ${count}.`,
    `${name} [${damageHP}/${defaultHP}] поперхнулся, и за это ${secondName} [${secondDamageHP}/${secondDefaultHP}] с испугу приложил прямой удар коленом в лоб врага силой ${count}.`,
    `${name} [${damageHP}/${defaultHP}] забылся, но в это время наглый ${secondName} [${secondDamageHP}/${secondDefaultHP}], приняв волевое решение, неслышно подойдя сзади, ударил силой ${count}.`,
    `${name} [${damageHP}/${defaultHP}] пришел в себя, но неожиданно ${secondName} [${secondDamageHP}/${secondDefaultHP}] случайно нанес мощнейший удар силой ${count}.`,
    `${name} [${damageHP}/${defaultHP}] поперхнулся, но в это время ${secondName} [${secondDamageHP}/${secondDefaultHP}] нехотя раздробил кулаком <вырезанно цензурой> противника силой ${count}.`,
    `${name} [${damageHP}/${defaultHP}] удивился, а ${secondName} [${secondDamageHP}/${secondDefaultHP}] пошатнувшись влепил подлый удар силой ${count}.`,
    `${name} [${damageHP}/${defaultHP}] высморкался, но неожиданно ${secondName} [${secondDamageHP}/${secondDefaultHP}] провел дробящий удар силой ${count}.`,
    `${name} [${damageHP}/${defaultHP}] пошатнулся, и внезапно наглый ${secondName} [${secondDamageHP}/${secondDefaultHP}] беспричинно ударил в ногу противника силой ${count}.`,
    `${name} [${damageHP}/${defaultHP}] расстроился, как вдруг, неожиданно ${secondName} [${secondDamageHP}/${secondDefaultHP}] случайно влепил стопой в живот соперника силой ${count}.`,
    `${name} [${damageHP}/${defaultHP}] пытался что-то сказать, но вдруг, неожиданно ${secondName} [${secondDamageHP}/${secondDefaultHP}] со скуки, разбил бровь сопернику силой ${count}.`,
  ];
  const stringLog = logs[randomOne(logs.length) - 1];
  const $paragraph = document.createElement("p");
  $paragraph.innerText = stringLog;
  $logs.insertBefore($paragraph, $logs.children[0]);

  return stringLog;
}

function countButtonAkaZarEdition(count = 6, el) {
  const innerText = el.innerText;
  el.innerText = `${innerText} (${count})`;
  return function () {
    count--;
    if (count === 0) {
      el.disabled = true;
    }
    el.innerText = `${innerText} (${count})`;
    return count;
  };
}

// function random(max, min = 0) {
//   const num = max - min;
//   return Math.ceil(Math.random() * num) + min;
// }

function randomOne(num) {
  return Math.ceil(Math.random() * num);
}

function randomRound() {
  return Math.round(Math.random());
}

function $getElById(id) {
  return document.getElementById(id);
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressBarHP();
}

function renderHPLife() {
  this.elHP.innerText = this.damageHP + " / " + this.defaultHP;
}

function renderProgressBarHP() {
  this.elProgressBar.style.width = this.damageHP / (this.defaultHP / 100) + "%";
}
