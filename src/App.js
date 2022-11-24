import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bit from './Bit';

function App() {
  const [someObject, setSomeObject] = React.useState({
    displayString: "00000000",
    error: ""
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
    let number = parseInt(event.target.value);
    if ((number < 0) || (number > 255)) {
      number = 0;
      event.target.value = 0;
      setSomeObject({
        displayString: "00000000",
        error: "Number must be between 0 and 255"
      });
      return;
    }
    console.log(dec2bin(number).padStart(8, '0'));
    let binString = dec2bin(number).padStart(8, '0');
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
      <p/>
      {someObject.error}
    </div>
  );
}

export default App;
