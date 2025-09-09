import Header from "./components/molecules/Header";
import Identity from "./components/molecules/Identity";
import Biodata from "./components/molecules/Biodata";
import Highlight from "./components/molecules/Highlight";
import "./css/style.css";

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

export default App;
