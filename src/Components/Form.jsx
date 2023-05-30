function Form() {
  return (
    <div>
      <form action="">
         <input type="text" placeholder="write a task" className="border-b w-full focus:outline-none placeholder:italic placeholder:font-serif"/>

      </form>
      <button className="bg-black text-white px-8 py-2 rounded-md mt-2">
         Add
      </button>
    </div>
  )
}
export default Form