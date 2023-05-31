import { useState } from "react";
function Form() { 
  
  const [textInput, setTextInput] = useState({
    input:''
    
  }); 

  

  const handleSubmit = (e)=>{
    e.preventDefault()  
  
    console.log(textInput);   

  }


  const handleChange = (e)=>{
    const {name, value} = e.target;
    setTextInput({
      ...textInput,
      [name]: value
    });      

  }

  

  return (
    
    <div>      
     
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="write a task" className="border-b w-full focus:outline-none placeholder:italic placeholder:font-serif" 
         onChange={handleChange} value={textInput.input} name="input" />  

         
           <button type="Submit" className="bg-black text-white px-8 py-2 rounded-md mt-2" >
         Add
      </button>

      </form>
    
    </div>
  )
}
export default Form