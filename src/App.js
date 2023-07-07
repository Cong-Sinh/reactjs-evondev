import "./asset/index.scss";
// import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import CardTaiWind from "./components/card/CardTailWind";
function App() {
  return (
    <div className="App">
      <CardList>
        <CardTaiWind />
      </CardList>
    </div>
  );
}

export default App;
