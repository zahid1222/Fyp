import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useNavigate ,useLocation } from 'react-router-dom';
import background from "../images/Hall2.jpg";
const stripePromise = loadStripe('pk_test_51NGzwrHZts8xIA3zTLSwQhVjRCws8Tq7az1j51N4crByU5TLEJuCcezzpX4sF9Ue3tL0hopmhiEjYfBbHWJSPI2900dJLuNesW');

const PaymentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { Booking, data } = location.state; 
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    cardholderName: '',
    amount: Booking.amount,
  });
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/create-payment-intent',{
        amount: formData.amount,
        cardholderName: formData.cardholderName,});
      const { clientSecret } = response.data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: formData.cardholderName,
          },
        },
       
      });
     
      if (result.error) {
        setErrorMessage(result.error.message);
      } else {
        console.log('Payment succeeded!');
        try {
          const savePaymentResponse = await axios.post('http://127.0.0.1:8000/api/save-payment-intent', {
                cardholderName: formData.cardholderName,
                amount: formData.amount,
                userId: data.user.id,
                
              });
              console.log(savePaymentResponse);
              // Handle the response from the backend
              if (savePaymentResponse.status === 200) {
                console.log('Payment details saved successfully!');
                console.log(Booking);
                  const saveBookingResponse = await axios.post('http://127.0.0.1:8000/api/save-Booking', {
                    booking: {
                      date: Booking.date,
                      guest: Booking.expectedguest,
                      venueId: Booking.venueid,
                      shift: Booking.shift,
                      venueName: Booking.venuename,
                    },
                    paymentid:savePaymentResponse.data.paymentId,
                    userId: data.user.id,
                      });
                      if (saveBookingResponse.status === 200) {
                        console.log('Booking saved successfully!');
                        navigate('/Thanks')
                      } else {
                        console.error('Error saving booking:', saveBookingResponse.data);
                        console.log('User-end error:', saveBookingResponse.data.message);
                      }
                      
              } else {
                console.log('Failed to save payment details.');
              }
            
          } catch (error) {
            console.log(error);
          }
       
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (<div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', width: "100%" }}>
    <form onSubmit={handleSubmit} style={{ marginLeft: '350px', width: '50%',marginTop:"px" }}>
      <center>
        <h1>Payment Details</h1>
      </center>
      <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="cardholderName">Cardholder Name:{data.user.id}</label>
        <input
          type="text"
          id="cardholderName"
          name="cardholderName"
          value={formData.cardholderName}
          onChange={handleChange}
          placeholder='John, Deo'
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          }}
        />
      </div>
    <h3 style={{ color: 'black' }}>
  The Payable amount to Venue =PKR:{Booking.amount} 
</h3>
<br></br>
      <center><button style={{ width: '40%', borderRadius: '150px' }} type="submit">
        <FontAwesomeIcon icon={faCreditCard} style={{ marginRight: '10px' }} />
        Pay
      </button></center>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
    <br ></br> <br ></br> <br ></br> <br ></br> <br ></br>
    <br ></br> <br ></br> <br ></br> <br ></br> <br ></br>
    </div>
  );
};

const AppClient = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default AppClient;