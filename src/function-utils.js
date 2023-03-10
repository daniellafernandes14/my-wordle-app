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
  setTimeout(() => position.removeChild(element), 5000);
}
