import InputCard from "./InputCard"



function Submission({subItem, handleDelete}) {

 

  return (

    <>
    {subItem.map((item,index)=>{
      return <InputCard
       key={index}
       item={item}
       handleDelete={handleDelete}
       >
        {item}
      </InputCard>      

    })}
    </>

   
  )
}
export default Submission