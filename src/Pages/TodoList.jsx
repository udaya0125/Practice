import React, { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const [userInput, setUserInput] = useState("");

  const handeSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() === "") return;

    setTodoList((prev) => [
      ...prev,
      {
        id: Math.random(),
        list: userInput,
        status: "pending",
      },
    ]);
    setUserInput("");
  };
  const handleDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  //  const handleComplete=(id)=>{
  //     setTodoList(todoList.filter((item)=>item.id!==id).prev.map((item)

  // ))
  // }

  const handleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id == id
          ? {
              ...item,
              status: item.status === "pending" ? "completed" : "pending",
            }
          : item,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-white  flex items-center justify-center">
      <div className=" w-full max-w-md">
        <div className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-900 rounded-t-2xl px-8 py-10">
          <h2 className="text-white text-2xl text-center font-normal mb-4 tracking-wide">
            TODO LIST
          </h2>
          <form
            onSubmit={handeSubmit}
            className="bg-amber-100 w-full rounded-xl shadow-md flex flex-col items-center py-8 px-8 -mb-21">
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="border-b-2 border-gray-400 outline-none text-lg w-full text-center mb-6"
              placeholder="What would like to do?"
              type="text"
            />
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-18 py-2 rounded shadow-md transition text-lg font-medium">
              Add
            </button>
          </form>
        </div>
        <div className="bg-amber-50 w-full rounded-xl shadow-md  mt-16 px-8 py-8">
          <h3 className="font-bold text-lg mb-2">Todo List</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500">
                <th className="font-semibold pb-2">Completed</th>
                <th className="font-semibold pb-2">Id</th>
                <th className="font-semibold pb-2">List</th>
                <th className="font-semibold pb-2">Status</th>
                <th className="font-semibold pb-2">Close</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((todo, index) => (
                <tr key={todo.id}>
                  <td className="py-2">
                    <input
                      type="checkbox"
                      checked={todo.status === "completed"}
                      onChange={() => handleComplete(todo.id)}
                    />
                  </td>
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">{todo.list}</td>
                  <td
                    className={`py-2 ${todo.status === "completed" ? "line-through text-gray-500" : ""}`}>
                    {todo.status}
                  </td>
                  <td className="py-2">
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="text-red-600 hover:text-red-700 font-semibold">
                      close
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
