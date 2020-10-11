import Pokemon from "./pokemon.js";
import random from "./utils.js";
import restartGame from "./restartGame.js";
import {generateLog} from "./generateLog.js";
import {clickCount} from "./clickCount.js";

class Game {
    getPokemons = async () => {
    const responce = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
        const body = await responce.json();
        // console.log(body);
        return body;
    }
    
    startGame = async () => {
    
    const pokemons = await this.getPokemons();

    // const dmg = await this.getDmg();

    // console.log(dmg);

   
    const randomPokemon1 = pokemons[random(0, pokemons.length)-1];
    const randomPokemon2 = pokemons[random(0, pokemons.length)-1];
    

const control = document.querySelector('.control');
const $logsWindow = document.getElementById('logs');

const player1 = new Pokemon({
    ...randomPokemon1,
    selectors: 'player-1',
})

const player2 = new Pokemon({
    ...randomPokemon2,
    selectors: 'player-2',
})

player1.attacks.forEach(item => {
    const btn = document.createElement('button');
    btn.classList.add('button', 'button__strike', 'd-block');
    btn.innerText = item.name;
    const btnCount = clickCount(item.maxCount, btn);
    btn.addEventListener('click', () => {
        btnCount();
         player2.changeHP(btn, random(item.minDamage, item.maxDamage), function (count) {
            //  console.log('player 1 min dmg:' + item.minDamage);
            //  console.log('player 1 max dmg:' + item.maxDamage);

        //  console.log(player2.hp.current);

        if (player2.hp.current <= 0) {
            location.reload();
         }
         const log = generateLog(player2, player1, count);
         const $p = document.createElement('p');
         $p.innerText = log;
         $logsWindow.insertBefore($p, $logsWindow.children[0]);

         });
         
player1.changeHP(btn, random(player2.attacks[1].minDamage, player2.attacks[1].maxDamage), function (count) {
            console.log('player 2 min dmg:' + player2.attacks[1].minDamage);
            console.log('player 2 max dmg:' + player2.attacks[1].maxDamage);

            //  console.log(player1.hp.current);
             if (player1.hp.current <= 0) {
                location.reload();
             }
            const log = generateLog(player1, player2, count);
            const $p = document.createElement('p');
            $p.innerText = log;
            $logsWindow.insertBefore($p, $logsWindow.children[0]);

        
            });
    })
    control.appendChild(btn);
});
    }

    getRandomPokemonTwo = () => {
        const randomPokemonTwo = pokemons[random(0, pokemons.length)-1]; 
    }
    
    openElements = () => {
        const pokemonCards = document.querySelectorAll('.pokemon');
        pokemonCards.forEach(element => element.classList.remove('d-none'));

        const battleLog = document.getElementById('logs');
        battleLog.classList.remove('d-none');
    }
}

const hideElements = () => {
    const pokemonCards = document.querySelectorAll('.pokemon');
    pokemonCards.forEach(element => element.classList.add('d-none'));

    const battleLog = document.getElementById('logs');
    battleLog.classList.add('d-none');
    
}

hideElements();

const startGameBtn = document.querySelector('.start-game__button');
const game = new Game();

startGameBtn.addEventListener('click', function () {
    this.classList.add('d-none');
    game.openElements();
    game.startGame();
})
