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
          disableButtons();
        } else if (guessWord.length !== 5) {
          console.log('try again');
        } else if (dictionaryWords.includes(guessWord)) {
          console.log('unlucky- try again');
          checkingLetters()
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
    if(rowIndex === 6) {
      console.log('unlucky - better luck next time')
      disableButtons();
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

  const disableButtons = () => {
    const button = document.getElementsByTagName('button');
    for (let i = 0; i < button.length; i++) {
      button[i].disabled = true;
    }
  }

  // dailyWord = GLASS
  // guessRow = CRASS

  const checkingLetters = () => {
    const guessRow = guessRows[rowIndex];
    guessRow.forEach((guessLetter, tileIndex) => {
      let changingTile = document.getElementById(`row-${rowIndex}-tile-${tileIndex}`);
      const correctPosition = guessLetter === dailyWord[tileIndex].toUpperCase();
      const letterExists = dailyWord.toUpperCase().includes(guessLetter);

      // Change colour of tile if letter is in the correct place
      if (correctPosition) {
        changingTile.style.backgroundColor = 'green';
      }
      // Change colour of tile if letter exists but is in the wrong place
      if (letterExists && !correctPosition) {
        changingTile.style.backgroundColor = 'orange';
      }
      // Change colour of tile if letter doesn't exist
      if (!letterExists) {
        console.log('letter does not exist');
        changingTile.style.backgroundColor = 'red';
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
