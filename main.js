function $getElById(id) {
  return document.getElementById(id);
}

const $btn = $getElById("btn-kick");
const $btn_fatality = $getElById("btn-fatality");

const character = {
  name: "Pikachu",
  defaultHP: 500,
  damageHP: 500,
  elHP: $getElById("health-character"),
  elProgressBar: $getElById("progressbar-character"),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressBarHP: renderProgressBarHP,
};

const enemy = {
  name: "Charmander",
  defaultHP: 500,
  damageHP: 500,
  elHP: $getElById("health-enemy"),
  elProgressBar: $getElById("progressbar-enemy"),
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
  this.elProgressBar.style.width = this.damageHP / (this.defaultHP / 100) + "%";
}

function changeHP(count) {
  const log =
    this === enemy
      ? generateLog(this, character, count)
      : generateLog(this, enemy, count);
  // console.log(this);
  console.log(log);

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

  return logs[random(logs.length) - 1];
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function randomRound() {
  return Math.round(Math.random());
}
