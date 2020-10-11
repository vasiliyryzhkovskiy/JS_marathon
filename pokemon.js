class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        this.elName = document.getElementById(`name-${name}`);
        this.elImg = document.getElementById(`img-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({name,hp,type,selectors,attacks,img}) {
       super(selectors);
       
       this.name = name;
       this.hp = {
           current: hp,
           total: hp,
       };
       this.type = type;
       this.attacks = attacks;
       this.img = img;

       this.renderHP();
       this.renderName();
       this.renderImg();
    }
    
renderName = () => {
    const {elName: elementName,name} = this;
    elementName.innerText = name;
}

renderImg = () => {
    const {elImg: elementImage, img: image} = this;
    elementImage.src = image;
}

changeHP = (btn, count, cb) => {
    btn = document.querySelectorAll('.button');
    
    this.hp.current-= count;
    
    if (this.hp.current <= 0) {
        this.hp.current = 0;
        alert('Покемон ' + this.name + ' проиграл!');
        btn.forEach($item => $item.remove());
    } 

    this.renderHP();
    cb && cb(count);
}

renderHPLife = () => {
    const { elHP, hp:{current, total} } = this;
    elHP.innerText = current + ' / ' + total;
}
renderHPProgressbar = () => {
    const {hp:{current, total}, elProgressbar} = this;
    const percentage = current / (total / 100);
    elProgressbar.style.width = percentage + '%';
    if (percentage < 60 && percentage >= 20 ) {
        elProgressbar.classList.add('low');
    } else if (percentage < 20) {
        elProgressbar.classList.add('critical');
    } else {
        elProgressbar.classList.remove('critical', 'low');
    }
}

renderHP = () => {
    this.renderHPLife();
    this.renderHPProgressbar();
}
}

export default Pokemon;
