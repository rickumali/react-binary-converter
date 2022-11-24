import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bit from './Bit';

function App() {
  const [someObject, setSomeObject] = React.useState({
    displayString: "00000000"
  });

  function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

  function renderBit(one_or_zero) {
    let checked = false;
    if (one_or_zero == "1") {
      checked = true;
    } else if (one_or_zero == "0") {
      checked = false;
    }
    return <Bit seton={checked}/>;
  }

  function handleChange(event) {
    console.log(event.target.value);
    console.log(dec2bin(parseInt(event.target.value)).padStart(8, '0'));
    let binString = dec2bin(parseInt(event.target.value)).padStart(8, '0');
    setSomeObject({
      displayString: binString
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        Bit Converter
      </header>
      <input className="Decimal-input" type='text'
        onChange={handleChange} />
      <p/>
      Binary: {someObject.displayString}
      <p/>
      {renderBit(someObject.displayString[0])}
      {renderBit(someObject.displayString[1])}
      {renderBit(someObject.displayString[2])}
      {renderBit(someObject.displayString[3])}
      {renderBit(someObject.displayString[4])}
      {renderBit(someObject.displayString[5])}
      {renderBit(someObject.displayString[6])}
      {renderBit(someObject.displayString[7])}
    </div>
  );
}

export default App;
