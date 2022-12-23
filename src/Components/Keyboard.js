import {Key} from './Keyboard.style';
import { disableButtons, showWinningMessage } from '../function-utils';

const Keyboard = ({ guessRows, dailyWord, dictionaryWords }) => {
  let rowIndex = 0;
  let tileIndex = 0;

  const selectLetter = (event) => {
    const letter = event.currentTarget.textContent
    let tile = document.getElementById(`row-${rowIndex}-tile-${tileIndex}`);
    const guessWord = guessRows[rowIndex].join('');
    const correctWord = guessWord === dailyWord.toUpperCase();
    const incompleteWord = guessWord.length !== 5;
    const incorrectWord = dictionaryWords.includes(guessWord);
    switch(letter) {
      case 'ENTER':
        if (correctWord) {
          checkingLetters();
          setTimeout(showWinningMessage(), -1000);
          disableButtons();
        } else if (incompleteWord) {
          console.log('incomplete word')
        } else if (incorrectWord) {
          console.log('unlucky- try again');
          checkingLetters()
          wrongWord(tile, letter)
        } else {
          console.log('that is not a word');
        }
        break;
      case '<<':
        deleteLetter(tile);
        break;
      default:
        enterLetter(tile, letter)
    }
  }

  const enterLetter = (tile, letter) => {
    if (tileIndex !== 5 && letter !== 'ENTER') {
      tile.textContent = letter;
      console.log(tile);
      guessRows[rowIndex][tileIndex] = letter;
      tileIndex++;
    }
    if (rowIndex === 6) {
      console.log('unlucky - better luck next time')
      disableButtons();
    }
  }

  const deleteLetter = (tile) => {
    if (tileIndex !== 0) {
      tileIndex--;
      tile = document.getElementById(`row-${rowIndex}-tile-${tileIndex}`);
      tile.textContent = '';
      guessRows[rowIndex][tileIndex] = '';
    }
  }

  const wrongWord = (tile, letter) => {
    rowIndex = ++rowIndex;
    tileIndex = 0;
    tile = document.getElementById(`row-${rowIndex}-tile-${tileIndex}`);
    enterLetter(tile, letter)
  }

  // dailyWord = GLASS
  // guessRow = CRASS

  const checkingLetters = () => {
    const guessRow = guessRows[rowIndex];
    guessRow.forEach((guessLetter, tileIndex) => {
      let changingTile = document.getElementById(`row-${rowIndex}-tile-${tileIndex}`);
      const correctPosition = guessLetter === dailyWord[tileIndex].toUpperCase();
      const letterExists = dailyWord.toUpperCase().includes(guessLetter);

      // Change colour of tile to green if letter is in the correct place
      if (correctPosition) {
        changingTile.style.backgroundColor = '#78e88b';
      }
      // Change colour of tile to orange if letter exists but is in the wrong place
      if (letterExists && !correctPosition) {
        changingTile.style.backgroundColor = 'orange';
      }
      // Change colour of tile to dark grey if letter doesn't exist
      if (!letterExists) {
        changingTile.style.backgroundColor = '#a4a7ab';
      }
    })
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
