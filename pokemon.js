class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressBar = document.getElementById(`progressbar-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor(name, defaultHP, damageHP, selector) {
    super(selector);
    this.name = name;
    this.defaultHP = defaultHP;
    this.damageHP = damageHP;
  }
}

export default Pokemon;
