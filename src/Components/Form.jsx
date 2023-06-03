import { useState } from "react";
function Form({setSubItem}) { 

  const [itemIput, setItemInput] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(itemIput){
      setSubItem((prevItems)=> [...prevItems, itemIput])
      setItemInput('')
    }

    console.log(typeof(itemIput));



    // console.log(typeof(itemIput));

    // setSubItem(itemIput);
    // setItemInput('')

    

    

  }
 
  return (
    
    <div>      
     
      <form onSubmit={handleSubmit}>
         <input type="text" value={itemIput} placeholder="write a task" className="border-b w-full focus:outline-none placeholder:italic placeholder:font-serif" onChange={(e)=>setItemInput(e.target.value) }    
         />  

         
           <button type="Submit" className="bg-black text-white px-8 py-2 rounded-md mt-2" >
         Add
      </button>

      </form>
    
    </div>
  )
}
export default Form