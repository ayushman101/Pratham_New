import {useEffect} from 'react';

const Completion = () => {

	useEffect( ()=>{

		const token = localStorage.getItem("prasthan_yatna_jwt")
		const courseId = localStorage.getItem("prasthan_yatna_courseId");
		


		const url = "http://localhost:3001/api/course/userCourse/";
		
		fetch(url, {
			method:'PUT',
			headers: {
				"Content-Type":"application/json",
				Authorization:`Bearer ${token}`,
			},

			body: JSON.stringify({
				courseId: courseId
			}),

		}).then(response => response.json())
		.then(data => {
			console.log(data.status)
		}).catch((error)=>{

			console.log(error)
			alert("Status: Pending")
		})

	},[])

	return (
		<div>
			<h1>
				Processing Success. Return to Courses page.
			</h1>
		</div>
	)

}

export default Completion;
