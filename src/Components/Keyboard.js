import {Key} from './Keyboard.style';

const Keyboard = ({guessRows}) => {
  let rowIndex = 0;
  let tileIndex = 0;

  const selectLetter = (event) => {
    const letter = event.currentTarget.textContent
    const tile = document.getElementById(`row-${rowIndex}-tile-${tileIndex}`);
    if(letter === 'ENTER') {
      console.log('here');
    } if(letter === '<<') {
      tile.textContent = '';
      tileIndex--;
      guessRows[tileIndex] = '';
    } else {
      tile.textContent = letter;
      console.log(tile);
      guessRows[tileIndex] = letter;
      tileIndex++;
    }
  }

  const qwerty = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<<']
  ]
  return (
    qwerty.map(element => {
      return (
        <div key={`key-${qwerty.indexOf(element)}`} style={{margin: '8px'}}>
          {element.map(key => {
            return (
              <Key key={`key-${key}`} onClick={selectLetter}>{key}</Key>
            )
          })}
        </div>
      )
    })
  )
}

export default Keyboard;
