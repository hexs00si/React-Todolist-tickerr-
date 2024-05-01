import React from "react";
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(todos);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };
  const handleEdit = (e, id) => {
    let t = todos.filter((item) => item.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };
  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };
  return (
    <div>
      <Navbar />
      <div className="md:container mx-3 my-6 md:mx-auto rounded-xl border-2 border-gunmetal bg-periwinkle p-5 min-h-[80vh] md:w-1/2">
        <h1 className="font-bold text-center text-2xl">
          Tickerr - Tick your todo's right away{" "}
        </h1>
        <div className="addTodo my-4 flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-full rounded-lg py-1 px-5 hover:shadow-md shadow-green-400"
            placeholder="Log Your Todo's"
          />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 3}
            className="bg-gunmetal disabled:gunmetal hover:bg-blue-950 p-2 py-1 text-white text-sm font-medium rounded-lg "
          >
            Save
          </button>
        </div>
        <input
          type="checkbox"
          onChange={toggleFinished}
          checked={showFinished}
          className="my-2"
        />
        <span className=" font-normal"> Show Finished </span>
        <div className="h-[1px] bg-black opacity-15 mx-auto my-4 w-3/4"></div>
        <h2 className="text-xl font-semibold">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && (
            <div className="m-5 text-center font-semibold text-2xl">
              YOU HAVE NO TODO'S TO TICK
            </div>
          )}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div key={item.id} className=" todo flex  justify-between my-3">
                  <div className="flex gap-4 items-center">
                    <input
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                      name={item.id}
                      id=""
                    />
                    <div className={item.isCompleted ? "line-through" : " "}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      onClick={(e) => handleEdit(e, item.id)}
                      className="bg-gunmetal hover:bg-violet-950 p-2 py-1 text-white text-sm font-medium rounded-md mx-2"
                    >
                      <MdModeEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-gunmetal hover:bg-violet-950 p-2 py-1 text-white text-sm font-medium rounded-md mx-2"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
