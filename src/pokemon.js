class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressBar = document.getElementById(`progressbar-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor(name, hp, type, selectors) {
    super(selectors);
    this.name = name;
    this.hp = {
      current: hp,
      total: hp,
    };
    this.type = type;

    this.renderHP();
  }

  changeHP = (count) => {
    this.hp.current -= count;

    if (this.hp.current <= 0) {
      this.hp.current = 0;
    }

    this.renderHP();
  };

  renderHP = () => {
    this.renderHPLife();
    this.renderProgressBarHP();
  };

  renderHPLife = () => {
    const {
      elHP,
      hp: { current, total },
    } = this;
    elHP.innerText = current + " / " + total;
  };

  renderProgressBarHP = () => {
    const {
      hp: { current, total },
      elProgressBar,
    } = this;
    const procent = current / total / 100;
    elProgressBar.style.width = procent + "%";
  };
}

export default Pokemon;
