import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("");

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  // Filtreleme
  const filteredNotes = notes.filter((n) =>
    n.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Note App</h1>

      <input
        type="text"
        placeholder="Notları ara..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: "20px", width: "100%", padding: "8px" }}
      />

      <NoteForm addNote={addNote} />

      <NoteList notes={filteredNotes} />
    </div>
  );
}

export default App;
