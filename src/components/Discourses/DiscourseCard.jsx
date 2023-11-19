import { Button } from "@mui/material";
import "./DiscourseCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DiscourseCard = ({ img, id }) => {
  return (
    <div className="discourse_card_container">
      <div className="discourse_card">
        <img src={img} alt="course image" />
        <div>
          <Link to={`/discourses/${id}`}>
            <h1>Course Name</h1>
          </Link>
          <p>
            Course Description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet hic reprehenderit a perspiciatis porro
            obcaecati, beatae pariatur deserunt odit praesentium nostrum ab
            ipsum rerum illo! Eaque id officia saepe nobis recusandae maxime
            voluptatibus quos! lorem34
          </p>
          <Button variant="contained" color="success">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};
DiscourseCard.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default DiscourseCard;
