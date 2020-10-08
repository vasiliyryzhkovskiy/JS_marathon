import random from "./utils.js";
import Pokemon from "./pokemon.js";

const $btn = $getElById("btn-kick");
const $btn_mega_kick = $getElById("btn-mega-kick");

const $logs = document.querySelector("#logs");

const btnCountSimpleKick = countBut(6, $btn);
const btnCountMegaKick = countBut(10, $btn_mega_kick);

const player1 = new Pokemon({
  name: "Pikachu",
  type: "electric",
  hp: 500,
  selectors: "character",
});

const player2 = new Pokemon({
  name: "Charmander",
  type: "fire ",
  hp: 450,
  selectors: "enemy",
});

$btn.addEventListener("click", function () {
  btnCountSimpleKick();
  player1.changeHP(random(25, 0));
  player2.changeHP(random(25, 0));
});

$btn_mega_kick.addEventListener("click", function () {
  btnCountMegaKick();
  player1.changeHP(random(60, 20));
  player2.changeHP(random(60, 20));
});

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

function countBut(count = 6, el) {
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

function randomOne(num) {
  return Math.ceil(Math.random() * num);
}

function randomRound() {
  return Math.round(Math.random());
}

function $getElById(id) {
  return document.getElementById(id);
}
