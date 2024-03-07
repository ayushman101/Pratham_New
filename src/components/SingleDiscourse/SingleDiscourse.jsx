import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./SingleDiscourse.css";
import { Button } from "@mui/material";
import { useNavigate , useLocation, Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";




const SingleDiscourse = () => {

  
	const local = useLocation();
  
	const {course} = local.state
  
	console.log(course)
  
	const { id } = useParams();
	const navigate = useNavigate();


	const makePayment = token => {

		const body= {
			token,
			product: course
		}

		const headers = {
			"Content-Type": "application/json"
		}
		
		return fetch(`http://localhost:3001/api/course/payment`, {
			method: "POST",
			headers,
			body: JSON.Stringify(body)
		})
		.then(response => {
			console.log("Response : ", response)
			const { status }= response;
			console.log(status)

		})
		.catch (error => console.log(error)) ;

	};


  
	return (
    <div className="singleDiscourse">
      <h1>{course.Name}</h1>
      <img src={`http://localhost:3001/${course.ImgPath}`} alt="" />
      <div>
        <p>
	  {course.Brief_Desc}
        </p>
        <hr style={{ marginTop: "1rem" }} />
        <h4>23 Lectures</h4>
        <p>20 hours</p>
        <div>

	<Link to={`/coursePayment`} state = {{course:course}}>
	<Button
            variant="outlined"
            style={{ marginTop: "1rem", width: "200px" }}
        	  >
            Register
          </Button>
	</Link>

	  <Link to={`/discourses/video`} state={{course: course}}>
          <Button
            variant="outlined"
            style={{ marginTop: "1rem", width: "200px" }}
            color="success"
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
