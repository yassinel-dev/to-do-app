import { MdDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

export default function Tasks() {
  return (
    <div className=" shadow-(--shadow) flex justify-between items-center bg-slate-800 p-2 rounded-lg mt-2">
      <h3 className=" text-white text-sm font-light">my task</h3>
      <div className=" flex gap-2">
        <button className=" text-red-500 hover:text-red-700 transition duration-300">
          <MdDeleteOutline />
        </button>
        <button className=" text-green-500 hover:text-green-700 transition duration-300">
          <FaCheck />
        </button>
        <button className=" text-blue-500 hover:text-blue-700 transition duration-300">
          <CiEdit />
        </button>
      </div>
    </div>
  );
}
