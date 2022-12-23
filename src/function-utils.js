export const disableButtons = () => {
  const button = document.getElementsByTagName('button');
  for (let i = 0; i < button.length; i++) {
    button[i].disabled = true;
  }
}


export const showMessage = (message) => {
  const element = document.createElement('p');
  const position = document.getElementById('message');
  element.classList.add('message');
  element.textContent = message;
  position.append(element);
  setTimeout(() => position.removeChild(element), 4000);
}

// export const showIncompleteMessage = () => {
//   const element = document.createElement('p');
//   const position = document.getElementById('message');
//   element.classList.add('message');
//   element.innerHTML = `Please enter a 5 letter word`;
//   position.append(element);
// }

export const showLosingMessage = (dailyWord) => {
  const element = document.createElement('p');
  const position = document.getElementById('message');
  element.classList.add('message');
  element.innerHTML = `Bad luck - today's wordle was ${dailyWord}`;
  position.append(element);
}
