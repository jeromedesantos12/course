import { useState } from "react";

function Form({ onAddItem }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;
    onAddItem({
      id: Date.now(),
      title,
      done: false,
    });
    setTitle("");
  }

  function handleChange(e) {
    setTitle(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau kamu catat? 🤔</h3>
      <input
        type="text"
        name="title"
        id=""
        value={title}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
