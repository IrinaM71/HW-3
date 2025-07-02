import Rating from "./components/rating";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Выберите рейтинг</h1>
      <Rating />
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
