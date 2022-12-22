import {Tile, TileContainer} from './Row.style.js';

const Row = ({guessRows}) => {
  return(
    <div>
      {guessRows.map((row, rowIndex) => {
        return (
          <TileContainer key={`${guessRows.indexOf(row)}`}>
            {row.map((tile, tileIndex) => {
              return (
                <Tile id={`row-${rowIndex}-tile-${tileIndex}`} key={`tile-${tileIndex}`}>{tile}</Tile>
              )
            })}
          </TileContainer>
        )
      })}
    </div>
  );
}

export default Row;
