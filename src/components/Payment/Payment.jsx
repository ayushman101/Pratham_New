import {useState, useEffect} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import Checkout from './Checkout'
import {useLocation } from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';


const Payment = () => {
	
	const [stripePromise, setStripePromise]= useState(loadStripe("pk_test_51Oabj1SGz6Nn6PCdsCVyytaRC2lyy9nAHxt9bsVAQBIBS1Tcj2oorP6MAq6WrrqeR3izJ6gQSlkYhXngVbI9Q0sO00G4tdMXLb"));
	const [clientSecret, setClientSecret]= useState("");

	const local = useLocation();

	const {course}= local.state

	//TODO: write a useEffect fetching Publishable Key and setting stripePromise 
		

	useEffect(()=>{
		
		console.log("Inside New Payment.jsx")

		//const body= {
		//	course: course
		//}

		//const headers= {
		//	"Content-Type": "application/json"
		//}

		fetch ("http://localhost:3001/api/course/payment",{
			method: 'POST',
			headers:  {

				"Content-Type":"application/json",
                                Accept:`application/json`,
                                Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NWFmZjhjZDJlOTA5MGM1MzQ0Yjc2YTUiLCJlbWFpbCI6InNzZnNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzc2ZzIiwiaWF0IjoxNzA2MDMxMzk0LCJleHAiOjE3MjE1ODMzOTR9.9iHqhuEEnr4UiONEUrLT34o1egAckjJy3QCUNfKAx8A`
                        },

			body: JSON.stringify({
				course: course
			})
		})
		.then(async (r)=>{

			const {clientSecret}= await r.json();
				
			console.log(clientSecret);

			setClientSecret(clientSecret);
		})
	},[])

	return (

		<div>
			<h1>
				Payment Selection
			</h1>
			{stripePromise && clientSecret && (
			<Elements stripe={stripePromise} options={{clientSecret}}>
				<Checkout/>
			</Elements>
			)}
		</div>
		
	)

}

export default Payment;

