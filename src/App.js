import logo from './logo.svg';
import './App.css';
import Bit from './Bit';

function App() {
  function renderBit(checked) {
    return <Bit seton={checked}/>;
  }

  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        Bit Converter
      </header>
      <input className="Decimal-input" type='text'
        onChange={handleChange} />
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
