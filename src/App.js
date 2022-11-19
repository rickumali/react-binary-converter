import logo from './logo.svg';
import './App.css';
import Bit from './Bit';

function App() {
  function renderBit(i) {
    return <Bit />;
  }

  return (
    <div className="App">
      <header className="App-header">
        Bit Converter
      </header>
      <input className="Decimal-input" type='text'/>
      <p/>
      {renderBit(7)}
      {renderBit(6)}
      {renderBit(5)}
      {renderBit(4)}
      {renderBit(3)}
      {renderBit(2)}
      {renderBit(1)}
      {renderBit(0)}
    </div>
  );
}

export default App;
