function NoteItem({ note }) {
  return (
    <div
      style={{
        backgroundColor: note.color,
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {note.text}
    </div>
  );
}

export default NoteItem;
