import { useParams } from "react-router-dom";
import data from "../../../public/data.json";
import { useEffect } from "react";
import { useState } from "react";
import "./SingleDiscourse.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SingleDiscourse = () => {
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
      <h1>{courseDetails.courseName}</h1>
      <img src={courseDetails.image} alt="" />
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est
          tempore delectus illum modi exercitationem? Nesciunt vel rem
          voluptatum earum laborum, minima dolorum cumque! Enim officia
          necessitatibus sit ex hic nisi, illo deleniti ratione facere, eveniet
          ducimus, magni distinctio asperiores? Fugiat voluptatum eius
          veritatis, dignissimos, saepe a iste beatae necessitatibus est
          obcaecati aliquam neque? Sed ut eveniet quia, ipsam blanditiis quos
          ullam quae alias fugit est repellat minus consectetur vitae rem
          suscipit libero quasi explicabo maxime vero deleniti placeat pariatur
          id assumenda repellendus. Quibusdam voluptas esse vero asperiores ex
          sint, nemo nihil excepturi, nostrum fuga ipsam voluptatem
          perspiciatis. Velit, quam.
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
          <Button
            variant="outlined"
            style={{ marginTop: "1rem", width: "200px" }}
            color="success"
            onClick={() => {
              navigate("/discourses/video");
            }}
          >
            Go to course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleDiscourse;
