import React from 'react'
import { useNavigate } from 'react-router-dom'
import './payment.css'
// import { useNavigate } from 'react-router-dom'

const Payment = () => {

    const navigate = useNavigate();

    

    // const navigate = useNavigate();


    const handlesubmit = (e) => {
        e.preventDefault()
            var options = {
                key: "rzp_test_vCz7dMxFI6qC94",
                key_secret: "395d1wGWipzT22lMFrAspjjx",
                amount: 100 * 100,
                currenty: "INR",
                name: "Subscription Plan",
                description: "Post question in stack-overflow",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png",
                handler: function (response) {
                    navigate('/success')
                },
                prefill: {
                    // name: "",
                    // email: "",
                    contact: "9999999999"
                },
                // notes: {
                //     address: "",
                // },
                theme: {
                    color: "#000"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        
    }

    const makePay = (e) => {
        e.preventDefault()
            var options = {
                key: "rzp_test_vCz7dMxFI6qC94",
                key_secret: "395d1wGWipzT22lMFrAspjjx",
                amount: 1000 * 100,
                currenty: "INR",
                name: "Subscription Plan",
                description: "Post question in stack-overflow",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png",
                handler: function (response) {
                    navigate('/success')
                },
                prefill: {
                    // name: "",
                    // email: "",
                    contact: "9999999999"
                },
                // notes: {
                //     address: "",
                // },
                theme: {
                    color: "#000"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        
    }


    return (
        <div className='container'>
            <h1 className="cont-1">
                Welcome to STACK OVERFLOW <br /><span className='cont-2'>community to ask question</span>
            </h1>
            <div className='cont-3'>
                <div className='cont-4'>
                    <span className='cont-8'>FREE PLAN</span>
                    <h2 className='cont-5'>₹0 <span className='spn'>/month</span> </h2>  <hr />
                    <span className='cont-6'>post only 1 question a day</span> <br />
                    <a href='https://stack-overflow-18.netlify.app' rel="noreferrer" target='blank'><button className='cont-7'>Subscribe</button></a>
                </div>
                <div className='cont-4'>
                    <span className='cont-8'>SILVER PLAN</span>
                    <h2 className='cont-5'>₹100 <span className='spn'>/month</span> </h2>  <hr />
                    <span className='cont-6'>post only 5 questions a day</span> <br />
                    <button onClick={handlesubmit} type='submit' className='cont-7'>Subscribe</button>
                </div>
                <div className='cont-4'>
                    <span className='cont-8'>GOLD PLAN</span>
                    <h2 className='cont-5'>₹1000 <span className='spn'>/month</span> </h2>  <hr />
                    <span className='cont-6'>post unlimited questions a day</span> <br />
                    <button onClick={makePay} className='cont-7'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Payment
