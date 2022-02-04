import Form from "./components/Form";
import Result from "./components/Result";
import "./style/style.global.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1> Simulador de investimento</h1>
      </header>
      <main>
        <Form />
        <Result />
      </main>
    </div>
  );
}

export default App;
