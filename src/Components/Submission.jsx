import InputCard from "./InputCard"



function Submission({subItem}) {

 

  return (

    <>
    {subItem.map((item,index)=>{
      return <InputCard key={index}>
        {item}
      </InputCard>      

    })}
    </>

   
  )
}
export default Submission