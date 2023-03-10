import './App.css';
// import { useEffect } from "react"
import Row from './Components/Row';
import Keyboard from './Components/Keyboard';

function App() {
  const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ]

  const dailyWord = 'glass';

  const dictionaryWords = ['CLONE', 'TEETH', 'SHARE', 'GLASS', 'CROWD', 'LOADS', 'CRASS'];

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '',
  //       'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   };

  //   const selectWord = async () => {
  //     await fetch('https://random-words5.p.rapidapi.com/getRandom', options)
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //       .catch(err => console.error(err));
  //   };
  //   selectWord();
  // }, []);

  return (
    <>
    <div className="container">
      <div className='header'>
        <h1>Wordle</h1>
      </div>
      <div id='message'></div>
      <div className='tile-container'>
          <Row guessRows={guessRows} />
      </div>
      <div className='keys-container'>
          <Keyboard guessRows={guessRows} dailyWord={dailyWord} dictionaryWords={dictionaryWords} />
      </div>
    </div>
    </>
  );
}

export default App;
