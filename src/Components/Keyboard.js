import {Key} from './Keyboard.style';

const Keyboard = ({ guessRows, dailyWord, dictionaryWords }) => {
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
        } else if (guessWord.length !== 5) {
          console.log('try again');
        } else if (dictionaryWords.includes(guessWord)) {
          console.log('unlucky- try again');
          incorrectWord(tile, letter)
        } else {
          console.log('that is not a word');
        }
        break;
        case '<<':
          deleteLetter();
          break;
        default:
          enterLetter(tile, letter)
      }
    }

    const enterLetter = (tile, letter) => {
      if(tileIndex !== 5 && letter !== 'ENTER') {
        tile.textContent = letter;
        console.log(tile);
        guessRows[rowIndex][tileIndex] = letter;
        tileIndex++;
      }
    }

    const deleteLetter = (tile) => {
      if(tileIndex !== 0) {
        tileIndex--;
        tile = document.getElementById(`row-${rowIndex}-tile-${tileIndex}`);
        tile.textContent = '';
        guessRows[rowIndex][tileIndex] = '';
      }
    }

    const incorrectWord = (tile, letter) => {
      rowIndex = ++rowIndex;
      tileIndex = 0;
      tile = document.getElementById(`row-${rowIndex}-tile-${tileIndex}`);
      enterLetter(tile, letter)
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
