import React, { useState } from 'react';

const Form = (props) => {
  const { allNotes, setAllNotes } = props;
  const [note, setNote] = useState({
    message: "",
    checked: false
  });

  const changeHandler = (e) => {
    setNote({...note, [e.target.name]:[e.target.value]});
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setAllNotes([...allNotes, note]);
    setNote({
      message: "",
      checked: false});
  };

  return (
    <div className="container mt-4">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Note"
            name="message"
            value={note.message}
            onChange={changeHandler}
          />
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </div>
  );
};

export default Form;
