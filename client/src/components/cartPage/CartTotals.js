import React, {useState} from 'react'
import axios from 'axios';
import { ProductConsumer} from '../../context'
import { useHistory } from 'react-router-dom';
// import PayPalBtn from './Paypalbtn'
import { PayPalScriptProvider, PayPalButtons  } from "@paypal/react-paypal-js";


const initialOptions = {
    "client-id": "ASG4D0av_7jlMO00ee_hKu_iBoiEBliwH9Z5DD8wilIBAKvad-CeHCC3WJjyhhmJYGcxSv8VZfF98oup",
    currency: "USD",
    intent: "capture",
  };

  // Set up Axios interceptor for CORS
axios.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = '*';  // Replace '*' with your actual frontend URL
  return config;
});

function CartTotals({history}) {
 
   const [customerInfo, setCustomerInfo] = React.useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    cartTotal: ""
  });
  const [paymentMethod, setPaymentMethod] = useState(""); // Added state for payment method
  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };


  const handlePayment = (cartTotal) => {
    // Logic to handle payment and call API
    // const history = useHistory()
    console.log("in handle payment")
    console.log(cartTotal)
   
    if (paymentMethod === "paypal") {
      // Handle PayPal payment
      // Call PayPal API to create order and then make the API call to store information in the database
    } else if (paymentMethod === "cashOnDelivery") {
      // Handle Cash on Delivery
      // Make the API call to store information in the database
      axios.post('http://localhost:5000/create_order', {
        name: customerInfo.name,
        email: customerInfo.email,
        address: customerInfo.address,
        city: customerInfo.city,
        state: customerInfo.state,
        zipcode: customerInfo.zipcode,
        total: 9765
      })
      .then(response => {
        console.log(response.data);
        alert("ordered Successfully")
        setCustomerInfo({
          name: "",
          email: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
          total: "",
         
        });
        // return (
        //   <ProductConsumer>
        //     {value => {
        //     const {clearCart, cartSubTotal,cartTax,cartTotal} =value 
        //       clearCart()
        //     }}
        //   </ProductConsumer>
        // );

        history.push("/"); // Redirect to success page or any other desired page
      })
      .catch(error => {
        console.error("Error during Cash on Delivery:", error);
      });
    }
  };


    return (
        <div className="container">
            <div className="row">
                <ProductConsumer>
                {value=>{
                    const {clearCart, cartSubTotal,cartTax,cartTotal} =value

                    return (
                        <div className="col text-title text-center my-4">
                            <button className="btn btn-outline-danger text-capitalize my-4"
                             onClick={clearCart}> clear cart
                            </button>
                            <h3>Subtotal: ${cartSubTotal}</h3>
                            <h3>tax: ${cartTax}</h3>
                            <h3>total: ${cartTotal}</h3>
                            {/* <PayPalBtn history={history} cartTotal={cartTotal}
                            clearCart={clearCart}></PayPalBtn> */}
<div>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>City:</label>
                  <input
                    type="text"
                    name="city"
                    value={customerInfo.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>State:</label>
                  <input
                    type="text"
                    name="state"
                    value={customerInfo.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>zip code:</label>
                  <input
                    type="text"
                    name="zipcode"
                    value={customerInfo.zipcode}
                    onChange={handleInputChange}
                  />
                </div>
                  
                
<PayPalScriptProvider options={initialOptions}>
<div style={{ marginLeft: "17%"}}>
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      // Replace 'YOUR_SERVER_ENDPOINT' with your server endpoint to create a PayPal order
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              currency_code: "USD",
                              value: cartTotal,
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      // Capture the funds from the transaction
                      return actions.order.capture().then(details => {
                        // Handle the successful payment
                        console.log("Payment completed. Transaction details:", details);
                        history.push("/success"); // Redirect to success page or any other desired page
                      });
                    }}
                    onError={(err) => {
                      // Handle errors
                      console.error("Error during PayPal checkout:", err);
                    }}
                  />
                  </div>
                </PayPalScriptProvider>
                
                <button
                    className="btn btn-outline-success text-capitalize my-4"
                    onClick={() => {
                      setPaymentMethod("cashOnDelivery");
                      handlePayment(cartTotal);
                      clearCart()


                    }}
                  >
                    Cash on Delivery
                  </button>
                        </div>
                    )

                }}

                </ProductConsumer>

            </div>
        </div>

    )
}

export default CartTotals
