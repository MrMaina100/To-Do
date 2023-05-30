import Header from "./Header"
import Form from "./Form"
import Submission from "./Submission"


function Card() {
  return (
    <div className="p-10 mt-10 bg-white flex flex-col space-y-4 md:p-16  w-[19rem] md:mt-10 md:w-[34rem]  md:space-y-5 rounded-xl">

      <Header/>
      <Form/>
      <Submission/>
      

     

    </div>
  )
}
export default Card