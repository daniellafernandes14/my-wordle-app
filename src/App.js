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

  const dailyWord = 'clone';

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
      <div className='tile-container'>
          <Row guessRows={guessRows} />
      </div>
      <div className='keys-container'>
          <Keyboard guessRows={guessRows} dailyWord={dailyWord} />
      </div>
    </div>
    </>
  );
}

export default App;
