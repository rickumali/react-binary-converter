import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bit from './Bit';

function App() {
  const [someObject, setSomeObject] = React.useState({
    number: 0,
    displayString: "00000000",
    error: ""
  });

  function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

  function handleBitChange(b) {
    let newNumber = someObject.number;
    let newDisplayString = someObject.displayString.repeat(1);
    let one_or_zero = someObject.displayString[b]
    console.log("Help me Obi " + b + " " + one_or_zero);
    if (one_or_zero == "1") {
      // TODO: newDisplayString[b] = 0;
    } else if (one_or_zero == "0") {
      // TODO: newDisplayString[b] = 1;
    }
    setSomeObject({
      number: 11, // TODO: FIX. Hardcoded
      displayString: "00001011", // TODO: FIX. Hardcoded
      error: ""
    });
  }

  function renderBit(bit) {
    let checked = false;
    let one_or_zero = someObject.displayString[bit]
    if (one_or_zero == "1") {
      checked = true;
    } else if (one_or_zero == "0") {
      checked = false;
    }
    return (
      <Bit
        seton={checked}
        onChange={() => handleBitChange(bit)}
      />
    );
  }

  function handleChange(event) {
    let number = parseInt(event.target.value);
    if ((number < 0) || (number > 255)) {
      number = 0;
      event.target.value = 0;
      setSomeObject({
        number: number,
        displayString: "00000000",
        error: "Number must be between 0 and 255"
      });
      return;
    }
    console.log(dec2bin(number).padStart(8, '0'));
    let binString = dec2bin(number).padStart(8, '0');
    setSomeObject({
      number: number,
      displayString: binString,
      error: ""
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        Bit Converter
      </header>
      <input className="Decimal-input" type='text' value={someObject.number}
        onChange={handleChange} />
      <p/>
      Binary: {someObject.displayString}
      <p/>
      {renderBit(0)}
      {renderBit(1)}
      {renderBit(2)}
      {renderBit(3)}
      {renderBit(4)}
      {renderBit(5)}
      {renderBit(6)}
      {renderBit(7)}
      <p/>
      {someObject.error}
    </div>
  );
}

export default App;
