import { useState, useEffect } from "react"; 

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  console.log(toDos);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return ;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write Your Todo..." />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;