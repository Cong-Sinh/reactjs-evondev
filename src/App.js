import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";
function App() {
  const NewName = "sinhdz";
  return (
    <div className="App">
      <YoutubeList>
        <h2>{NewName}</h2>
      </YoutubeList>
    </div>
  );
}

export default App;
