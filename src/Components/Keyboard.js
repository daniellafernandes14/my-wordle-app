import {Key} from './Keyboard.style';

const Keyboard = () => {
  const qwerty = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<<']
  ]
  return (
    qwerty.map(element => {
      return (
        <div style={{margin: '8px'}}>
          {element.map(key => {
            return (
              <Key>{key}</Key>
            )
          })}
        </div>
      )
    })
  )
}

export default Keyboard;
