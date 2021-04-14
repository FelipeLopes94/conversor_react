// import logo from './logo.svg';
import './App.css';
import Conversor from './componentes/Conversor'
function App() {
  return (
    <div className="App">

      <header>
        <h1> CONVERSOR DE MOEDAS</h1>
      </header>
      <div className="container">

        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>

      </div>

    </div>
  );
}

export default App;
