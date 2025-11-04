import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  if (!notes.length) return <p>Hiç not yok</p>;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
