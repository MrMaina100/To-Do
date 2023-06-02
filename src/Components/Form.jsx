import { useState } from "react";
function Form({ setSubItem, subItem }) {
  const [itemIput, setItemInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // updating subItem state with the spread operator(...) so as not to change the previous state if there was any
    setSubItem([...subItem, itemIput]);
    setItemInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemIput}
          placeholder="write a task"
          className="border-b w-full focus:outline-none placeholder:italic placeholder:font-serif"
          onChange={(e) => setItemInput(e.target.value)}
        />

        <button
          type="Submit"
          className="bg-black text-white px-8 py-2 rounded-md mt-2"
        >
          Add
        </button>
        
        {/* added this button to clear all the todos at once */}
        <button
          onClick={() => setSubItem([])}
         className="bg-red-600 text-white px-8 py-2 rounded-md mt-2"
        >
          Delete All
        </button>
      </form>
    </div>
  );
}
export default Form;
