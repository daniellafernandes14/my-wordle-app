export const disableButtons = () => {
  const button = document.getElementsByTagName('button');
  for (let i = 0; i < button.length; i++) {
    button[i].disabled = true;
  }
}

export const showWinningMessage = () => {
  const element = document.createElement('p');
  const position = document.getElementById('message');
  element.classList.add('message');
  element.innerHTML = 'YOU WIN';
  position.append(element);
}

export const showLosingMessage = (dailyWord) => {
  const element = document.createElement('p');
  const position = document.getElementById('message');
  element.classList.add('message');
  element.innerHTML = `Bad luck - today's wordle was ${dailyWord}`;
  position.append(element);
}
