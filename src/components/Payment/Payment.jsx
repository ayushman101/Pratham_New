import {useState, useEffect} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import Checkout from './Checkout'
import {useLocation } from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';

import isTokenExpired from "../middlewares/isTokenExpired";

const Payment = () => {
	
	const [stripePromise, setStripePromise]= useState(loadStripe("pk_test_51Oabj1SGz6Nn6PCdsCVyytaRC2lyy9nAHxt9bsVAQBIBS1Tcj2oorP6MAq6WrrqeR3izJ6gQSlkYhXngVbI9Q0sO00G4tdMXLb"));
	const [clientSecret, setClientSecret]= useState("");

	const local = useLocation();

	const {course}= local.state

	//TODO: write a useEffect fetching Publishable Key and setting stripePromise 
		

	useEffect(()=>{
		
		console.log("Inside New Payment.jsx")
	
		const tokenKey= "prasthan_yatna_jwt";

		if(!isTokenExpired(tokenKey)){

		const token = localStorage.getItem(tokenKey)

		fetch ("http://localhost:3001/api/course/payment",{
			method: 'POST',
			headers:  {

				"Content-Type":"application/json",
                                Accept:`application/json`,
                                Authorization:`Bearer ` + token,
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

	
		}
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

