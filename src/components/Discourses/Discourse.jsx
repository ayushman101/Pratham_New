import "./Discourse.css";
import DiscourseCard from "./DiscourseCard";
import img1 from "../../assets/chandiPaath.jpg";
import img2 from "../../assets/Divine-mother-22.08.2023-OK.jpg";
import img3 from "../../assets/BHAJAGOVINDAM-OK.png";
import {useState, useEffect} from 'react';

const Discourse = () => {
	
	const [courses, setCourses]= useState([]);
	useEffect(()=>{
	
		fetch('http://localhost:3001/api/course/courses',{
			method: 'GET',
			headers:  {
				Accept:`application/json`,
				Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTViMDRkMDVmNzI3ZmZiNzNhMmQ5YTMiLCJlbWFpbCI6InNzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoic2lkIiwiaWF0IjoxNzAwNDYzODI0LCJleHAiOjE3MDU2NDc4MjR9.0KTKoBSeKpEHXhRDbqB-yi3fzLKSZp7U1J-REFyP6X0`
			},
		}).then(response=> response.json())
		.then(data=> {
			setCourses(data);
			console.log(data[0].Name)
		}).catch((error)=> {

			console.log('Error in Discourse useEffect: ',error);
		});
		
	},[])


	return (
	courses.length > 0 ? (
	
	<div className="discourse">
		<h1>Discourses</h1>
		<div>
		{
		   courses.map(course => (
			<DiscourseCard img={img1} id={course._id} data={course} />
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
