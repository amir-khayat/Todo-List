import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [allNotes, setAllNotes] = useState([]);
  return (
    <div className="App col-3 mx-auto mt-5">
      <h1 className="display-4">Todo List</h1>
      <Form allNotes={allNotes} setAllNotes={setAllNotes}/>
      <Display allNotes={allNotes} setAllNotes={setAllNotes}/>
    </div>
  );
}

export default App;
