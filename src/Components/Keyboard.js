import {Key} from './Keyboard.style';

const Keyboard = ({ guessRows, dailyWord }) => {
  let rowIndex = 0;
  let tileIndex = 0;

  const selectLetter = (event) => {
    const letter = event.currentTarget.textContent
    let tile = document.getElementById(`row-${rowIndex}-tile-${tileIndex}`);
    switch(letter) {
      case 'ENTER':
        const guessWord = guessRows[rowIndex].join('');
        if (guessWord === dailyWord.toUpperCase()) {
          alert('congrats');
        } else {
          alert('incorrect');
        }
        break;
      case '<<':
        if(tileIndex !== 0) {
          tileIndex--;
          tile = document.getElementById(`row-${rowIndex}-tile-${tileIndex}`);
          tile.textContent = '';
          guessRows[rowIndex][tileIndex] = '';
        }
        break;
      default:
        if(tileIndex !== 5) {
          tile.textContent = letter;
          console.log(tile);
          guessRows[rowIndex][tileIndex] = letter;
          tileIndex++;
        }
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
