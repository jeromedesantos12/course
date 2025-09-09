import stepItems from "../data/stepItems.json";

function Component({ step, handlePrev, handleNext }) {
  const buttonStyle = {
    backgroundColor: "#526D82",
    color: "#ffff",
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        {" "}
        Step {step}: {stepItems[step - 1]}
      </p>
      <div className="buttons">
        <button style={buttonStyle} onClick={handlePrev}>
          Prev
        </button>
        <button style={buttonStyle} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Component;
