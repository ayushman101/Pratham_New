import "./Discourse.css";
import DiscourseCard from "./DiscourseCard";
import {useState, useEffect} from 'react';
import isTokenExpired from "../middlewares/isTokenExpired";
import {useNavigate} from 'react-router-dom'

const Discourse = () => {

	const navigate = useNavigate();
	const [courses, setCourses]= useState([]);
	useEffect(()=>{


		const tokenKey ="prasthan_yatna_jwt"
	

		if(!isTokenExpired(tokenKey)){
		
		const token = localStorage.getItem(tokenKey)
		
		console.log(token)

		fetch('http://localhost:3001/api/course/courses',{
			method: 'GET',
			headers:  {
				Accept:`application/json`,
				Authorization:`Bearer ` + token,
			},
		}).then(response=> response.json())
		.then(data=> {
			console.log(data)
			console.log("after response")
			setCourses(data);
			console.log(data[0].Name)
		}).catch((error)=> {

			console.log('Error in Discourse useEffect: ',error);
		});
		
		}else {
			alert("Please Login or Register")
			navigate('/login');
		}

	},[])


	return (
	courses.length > 0 ? (
	
	<div className="discourse">
		<h1>Discourses</h1>
		<div>
		{
		   courses.map(course => (
			<DiscourseCard img={`http://localhost:3001/${course.ImgPath}`} id={course._id} data={course} />
		   ))
		}
		</div>
	</div>
	
	):
	(
		<div>
			No Course to Show
		</div>
	)
	)
};

export default Discourse;
