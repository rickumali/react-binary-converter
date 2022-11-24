import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bit from './Bit';

function App() {
  const [someObject, setSomeObject] = React.useState("0");

  function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

  function renderBit(checked) {
    return <Bit seton={checked}/>;
  }

  function handleChange(event) {
    console.log(event.target.value);
    console.log(dec2bin(parseInt(event.target.value)).padStart(8, '0'));
    let binString = dec2bin(parseInt(event.target.value)).padStart(8, '0');
    setSomeObject({displayString: binString});
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
      {renderBit(false)}
      {renderBit(false)}
      {renderBit(false)}
      {renderBit(false)}
      {renderBit(false)}
      {renderBit(false)}
      {renderBit(false)}
      {renderBit(true)}
    </div>
  );
}

export default App;
