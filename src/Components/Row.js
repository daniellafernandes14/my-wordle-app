import {Tile, TileContainer} from './Row.style.js';

const Row = () => {
  const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ]

  return(
    <div>
      {guessRows.map(row => {
        return (
          <TileContainer>
            {row.map(tile => {
              return (
                <Tile>{tile}</Tile>
              )
            })}
          </TileContainer>
        )
      })}
    </div>
  );
}

export default Row;
