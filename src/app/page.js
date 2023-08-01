/*


```````````````````````````````````````````````````````````````````````````````````````````````````````

    Time : Making Projects    
    Project : Todo List NextJS
    Details : Project using NextJS and Tailwind CSS.
    Date :   1 / 8 / 2023
        
        
````````````````````````````````````````````````````````````````````````````````````````````````````````

*/




"use client";
import { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { useRef } from "react";

export default function Home() {

  const text = useRef();

  const [todo, setTodo] = useState([
    { todo: "@PranavShilavane - Instagram", completed: false },
  ]);

  const setTodoComplete = (id) => {
    let temp = [...todo];
    temp[id].completed = !temp[id].completed;
    setTodo(temp);
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((to, i) => i != id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.current.value.trim()) return;
    setTodo([...todo, { todo: text.current.value, completed: false }]);
    text.current.value = "";
  };

  const Box = ({ id, todo, completed }) => {
    return (
      <div className="w-full flex justify-between gap-2 px-3 py-2.5 my-3 items-center bg-slate-100 border rounded">
        <p className={`${completed ? "line-through" : ""} text-sm w-full text-justify`}>
          {todo}
        </p>
        <div className="flex gap-4">
          <AiOutlineCheck
            className="text-xl"
            onClick={() => setTodoComplete(id)}
          />
          <BsTrashFill onClick={() => deleteTodo(id)} />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-center items-center  min-h-screen w-screen bg-[linear-gradient(cyan,skyblue,blue)]">

        <div
          className="container max-w-[350px] h-[500px] bg-white rounded-lg shadow-md shadow-white p-3 mx-1"
          style={{ minHeight: "450px" }}
        >
          <h2 className="text-2xl text-center py-3">Todo List</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center">
              <input
                ref={text}
                type="text"
                className="my-3 w-[80%] border-2 px-2 py-1.5 text-sm"
                placeholder="Enter Todo"
              />
              <input
                type="submit"
                className="text-xs text-white font-bold tracking-widest px-3 py-1.5 mx-1 bg-sky-400 rounded shadow shadow-slate-500"
                value={"Add todo"}
              />
            </div>
          </form>
          <div className="px-3 py-5 mt-3 overflow-scroll h-72">
            {!todo.length ? (
              <div className="text-center">Plan your Todo today 😇</div>
            ) : (
              todo.map((to, i) => <Box key={i} {...{ ...to, id: i }} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
