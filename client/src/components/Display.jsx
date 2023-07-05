import React from 'react';

const Display = (props) => {
  const {allNotes, setAllNotes} = props;

  return (
    <div className="container border border-dark mt-4">
      <h3 className="display-6">Display</h3>
      <hr />
      {allNotes.map((note, idx) => (
        <div>
          <div className="form-check mt-4 d-flex justify-content-between" key={idx}>
            <input
              type="checkbox"
              checked={note.checked}
              onChange={() => {
                note.checked = !note.checked;
                setAllNotes([...allNotes]);
              }}
            />
            <label>
              {note.checked ? (
                <span className="text-decoration-line-through">{note.message}</span>
              ) : (
                <span>{note.message}</span>
              )}
            </label>
            <input type="button" className="btn btn-danger btn-sm " value="Delete" onClick={() => {
              setAllNotes(allNotes.filter((note, i) => i !== idx));
            }} />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Display;
