import Header from "./Header"
import Form from "./Form"
import Submission from "./Submission"
import { useState, useEffect } from "react"


const itemfromLocalStorage = JSON.parse(localStorage.getItem('item') || '[]')

function Card() {

  const [subItem, setSubItem] = useState(itemfromLocalStorage)

  useEffect(()=>{
    localStorage.setItem('item', JSON.stringify(subItem))

  }, [subItem])

  const handleDelete = (item)=>{   

   const updatedSubItem = subItem.filter((itm) => itm !== item);
   setSubItem(updatedSubItem); 
   localStorage.setItem('item', JSON.stringify(updatedSubItem));
 
  }


  return (
    <div className="p-10 mt-10 bg-white flex flex-col space-y-4 md:p-16  w-[19rem] md:mt-10 md:w-[34rem]  md:space-y-2 rounded-xl">

      <Header/>
      <Form  setSubItem={setSubItem} />      
      <Submission subItem={subItem}  handleDelete={handleDelete}/>  


    </div>
  )
}
export default Card