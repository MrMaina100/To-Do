import InputCard from "./InputCard";

function Submission({ subItem }) {
  return (
    <InputCard>
      {/* since subItem is now an array of todos then mapping over them and returning a paragraph is the most suitable solution to display all the todos */}
      {subItem.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </InputCard>
  );
}
export default Submission;
