import "./App.css";
import Card from "./Card";
import Heading from "./Heading";
function Edu() {
  return (
    <div className="portfolio-edu" id="education">
      <Heading title="education" />
      <div className="portfolio-edu_item">
        <Card
          yr="2023"
          stand="FULL STACK DEVELOPMENT"
          detail="From Masai School"
        />
        <Card
          yr="2022"
          stand="BACHELOR OF INFORMATION
          TECHNOLOGY"
          detail="From Anugrah Narayan College"
        />
        <Card
          yr="2018"
          stand="INTERMEDIATE"
          detail="From Anugrah Narayan College"
        />
        <Card
          yr="2016"
          stand="MATRICULATION"
          detail="From holy mission secondary school."
        />
      </div>
    </div>
  );
}
export default Edu;
