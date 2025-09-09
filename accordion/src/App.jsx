import Accordion from "./components/molecules/Accordion";
import faqs from "./data/faqs";
import "./css/style.css";

function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

export default App;
