import { Button } from "@mui/material";
import "./DiscourseCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DiscourseCard = ({ img, id, data }) => {

	id=1;
	
return (
    <div className="discourse_card_container">
      <div className="discourse_card">
        <img src={img} alt="course image" />
        <div>
          <Link to={`/discourses/${id}`} state={{course: data}}>
            <h1>{data.Name}</h1>
          </Link>
          <p>
	  	{data.Brief_Desc}
          </p>
	  <p>
	  	AUTHOR: {data.Author}
	  </p>

	  <p>
	  	Price: {data.Price} 
	  </p>
	  <Link to={`/coursePayment`} state={{course: data}}>
          <Button variant="contained" color="success">
            Register
          </Button>
	</Link>
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
