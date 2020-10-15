function restartGame () {
    const control = document.querySelector('.control');
    const restartGameBtn = document.createElement('button');
    restartGameBtn.innerText = 'restart Game';
    restartGameBtn.classList.add('button', 'button--restart-game');
    control.appendChild(restartGameBtn);
    restartGameBtn.addEventListener('click', () => {
         location.reload();
  });
}

export default restartGame;