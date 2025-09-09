import { useState } from "react";
import Component from "./components/Component";
import "./css/style.css";

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    step > 1 && setStep((step) => step - 1);
  }

  function handleNext() {
    step < 3 && setStep((step) => step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <Component
          step={step}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
    </>
  );
}

export default App;
