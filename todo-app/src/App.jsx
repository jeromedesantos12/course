import { useState } from "react";
import "./css/style.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [inputNote, setInputNote] = useState("");

  function handleInputChange(e) {
    setInputNote(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    inputNote.trim() !== "" &&
      setNotes([
        ...notes,
        {
          id: notes.length + 1,
          text: inputNote,
        },
      ]);
    setInputNote("");
  }

  function handleDeleteNote(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <form className="note-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a note"
          value={inputNote}
          onChange={handleInputChange}
        />
        <button>Add</button>
      </form>
      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={index}>
            {note.text}
            <button data-id={note.id} onClick={handleDeleteNote}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
