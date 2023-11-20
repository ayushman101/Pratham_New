import { useParams } from "react-router-dom";
import data from "../../../public/data.json";
import { useEffect } from "react";
import { useState } from "react";
import "./SingleDiscourse.css";
import { Button } from "@mui/material";
import { useNavigate , useLocation, Link } from "react-router-dom";


const SingleDiscourse = () => {

  const local = useLocation();
  const {course} = local.state
  console.log(course)
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    //finding the specific course detail of id given in params
    const detail = data.find((el) => el.id == id);
    setCourseDetails(detail);
  }, [courseDetails, id]);
  return (
    <div className="singleDiscourse">
      <h1>{course.Name}</h1>
      <img src={courseDetails.image} alt="" />
      <div>
        <p>
	  {course.Brief_Desc}
        </p>
        <hr style={{ marginTop: "1rem" }} />
        <h4>23 Lectures</h4>
        <p>20 hours</p>
        <div>
          <Button
            variant="outlined"
            style={{ marginTop: "1rem", width: "200px" }}
          >
            Register
          </Button>
	  <Link to={`/discourses/video`} state={{course: course}}>
          <Button
            variant="outlined"
            style={{ marginTop: "1rem", width: "200px" }}
            color="success"
          //  onClick={() => {
            //  navigate("/discourses/video");
           // }}
          >
            Go to course
          </Button>
	  </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleDiscourse;
