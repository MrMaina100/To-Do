import {FaTimes} from 'react-icons/fa'

function InputCard({children, handleDelete, item}) {
  return (
  
   <div className="flex flex-col space-y-1 ">
     
      <div className=" flex justify-between p-3 md:p-4 rounded-md shadow-lg">

        {children}

        <button className='text-red-600 w-2' onClick={()=>handleDelete(item)}>
          <FaTimes ></FaTimes>
        </button>

      </div>

   </div>
  )
}
export default InputCard 