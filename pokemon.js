export const character = {
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

export const enemy = {
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
