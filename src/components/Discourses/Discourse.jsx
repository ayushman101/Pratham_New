import "./Discourse.css";
import DiscourseCard from "./DiscourseCard";
import img1 from "../../assets/chandiPaath.jpg";
import img2 from "../../assets/Divine-mother-22.08.2023-OK.jpg";
import img3 from "../../assets/BHAJAGOVINDAM-OK.png";

const Discourse = () => {
  return (
    <div className="discourse">
      <h1>Discourses</h1>
      <div>
        <DiscourseCard img={img1} id={1} />
        <DiscourseCard img={img2} id={2} />
        <DiscourseCard img={img3} id={3} />
      </div>
    </div>
  );
};

export default Discourse;
