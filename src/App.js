import React from "react";
import "./App.css";
import Bit from "./Bit";

function App() {
  const [someObject, setSomeObject] = React.useState({
    number: 0,
    displayString: "00000000",
    error: "",
  });

  function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

  function handleBitChange(b) {
    let newNumber = someObject.number;
    let one_or_zero = someObject.displayString[b];
    let actual_bit = 7 - b;
    if (one_or_zero === "1") {
      newNumber = newNumber - 2 ** actual_bit;
    } else if (one_or_zero === "0") {
      newNumber = newNumber + 2 ** actual_bit;
    }
    let binString = dec2bin(newNumber).padStart(8, "0");
    setSomeObject({
      number: newNumber,
      displayString: binString,
      error: "",
    });
  }

  function renderBit(bit) {
    let checked = false;
    let one_or_zero = someObject.displayString[bit];
    if (one_or_zero === "1") {
      checked = true;
    } else if (one_or_zero === "0") {
      checked = false;
    }
    return <Bit seton={checked} onChange={() => handleBitChange(bit)} />;
  }

  function handleChange(event) {
    let number = parseInt(event.target.value);
    if (number < 0 || number > 255) {
      number = 0;
      event.target.value = 0;
      setSomeObject({
        number: number,
        displayString: "00000000",
        error: "Number must be between 0 and 255",
      });
      return;
    }
    console.log(dec2bin(number).padStart(8, "0"));
    let binString = dec2bin(number).padStart(8, "0");
    setSomeObject({
      number: number,
      displayString: binString,
      error: "",
    });
  }

  return (
    <div className="App">
      <header className="App-header">Binary Converter</header>
      <input
        className="Decimal-input"
        type="text"
        value={someObject.number}
        onChange={handleChange}
      />
      <p />
      Binary: {someObject.displayString}
      <p />
      {renderBit(0)}
      {renderBit(1)}
      {renderBit(2)}
      {renderBit(3)}
      {renderBit(4)}
      {renderBit(5)}
      {renderBit(6)}
      {renderBit(7)}
      <p />
      {someObject.error}
    </div>
  );
}

export default App;
