import {useEffect, useState} from 'react';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';


const Checkout= ()=>{

	const [message, setMessage]= useState("");

	const [isProcessing, setIsProcessing]= useState(false)

	const stripe= useStripe();
	const elements= useElements();

	console.log("Checkout page");

	console.log(window.location.origin);
	//console.log(elements);

	const handlePayment= async (e)=> {
		e.preventDefault();

		if(!stripe || !elements)
			return;

		setIsProcessing(true);

		const {error} = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: `${window.location.origin}/completion`,
			},
			//redirect: "if_required",
		})

		if(error){

			console.log("Error: ", error.message);	
			setMessage(error);
		}

		else
			console.log("No Error")
		setIsProcessing(false);
	}

	return (

		<form id="payment-form" onSubmit={handlePayment} >
			<PaymentElement/>
			<button disabled={isProcessing} id="Submit">
				<span id="button-text">
					{isProcessing? "Processing ... ": "Pay Now"}
				</span>
			</button>
		</form>

	)
}

export default Checkout
