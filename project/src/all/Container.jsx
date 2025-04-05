import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Tasks from "./Tasks";
export default function Container() {
  const [taskValue, setTaskValue] = useState("");
  const handleInputChange = (event) => {
    setTaskValue(event.target.value);
  };

  return (
    <div className=" shadow-(--shadow) bg-slate-700 border-2 rounded-lg p-4 select-none">
      <div className=" flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Please Enter Your Task(s)"
          className=" bg-slate-800 p-2 rounded-lg outline-none text-white"
          value={taskValue}
          onChange={handleInputChange}
        />
        <button onClick={() => console.log(taskValue)}>
          <CiSearch className=" bg-slate-900 text-white font-bold p-2 text-3xl rounded-2xl" />
        </button>
      </div>
      <div>
        <h1 className=" text-gray-300 font-bold text-center mt-3">tasks:</h1>
      </div>
      <div className=" mt-3">
        <Tasks />
      </div>
    </div>
  );
}
