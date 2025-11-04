import { useState } from "react";

const colors = [
  "#f28b82",
  "#fbbc04",
  "#fff475",
  "#ccff90",
  "#a7ffeb",
  "#cbf0f8",
  "#aecbfa",
];

function NoteForm({ addNote }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState(colors[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addNote({ text, color });
    setText("");
    setColor(colors[0]);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <textarea
        placeholder="Notunu yaz..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "8px" }}
      />
      <div style={{ margin: "10px 0" }}>
        {colors.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setColor(c)}
            style={{
              backgroundColor: c,
              border: color === c ? "2px solid black" : "1px solid gray",
              width: "30px",
              height: "30px",
              marginRight: "5px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
      <button type="submit" style={{ padding: "8px 16px" }}>
        Notu Ekle
      </button>
    </form>
  );
}

export default NoteForm;
