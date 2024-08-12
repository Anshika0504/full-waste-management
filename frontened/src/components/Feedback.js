import React, { useState } from 'react';
import './feedback.css';
import { useNavigate } from 'react-router-dom';

function Feedback() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate(); // Correct usage without argument here

    const addfeed = async () => {
        if (!name || !email || !message || !subject) {
            setError(true);
            return;
        }

        try {
            let response = await fetch("http://localhost:8000/createfeed", {
                method: "POST",
                body: JSON.stringify({ name, email, message, subject }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            // Handle non-200 responses
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let result = await response.json();
            console.log(result);

            if (result) {
                // Clear the form fields after successful submission
                setName("");
                setEmail("");
                setMessage("");
                setSubject("");
                setError(false);

                // Navigate to the homepage or any other route
                navigate("/"); 
            }
        } catch (error) {
            console.error("There was an error submitting the feedback:", error);
            alert("An error occurred while submitting the feedback. Please try again.");
        }
    };

    return (
        <>
            <h1 className='hfeed'>Feedback Form</h1>
            <div className='main'>
                <div className='left'>
                    <input 
                        className="in" 
                        placeholder='Enter Your Name' 
                        type="text"
                        value={name}  
                        onChange={(e) => setName(e.target.value)}
                    />
                    {error && !name && <span className="error">Name is required</span>}
                    
                    <input 
                        className='in' 
                        placeholder='Enter Your Email' 
                        type="email"
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    {error && !email && <span className="error">Email is required</span>}
                    
                    <input 
                        className='in' 
                        placeholder='Enter The Message' 
                        type="text"
                        value={message}  
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {error && !message && <span className="error">Message is required</span>}
                    
                    <input 
                        className='in' 
                        placeholder='Enter The Subject'  
                        type="text"
                        value={subject}  
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    {error && !subject && <span className="error">Subject is required</span>}

                    <button className='btnfeed' onClick={addfeed}>Submit</button>
                </div>
                <div className='right'>
                    <img 
                        className='feedimg' 
                        src="https://static.vecteezy.com/system/resources/previews/026/994/770/non_2x/chemical-recycling-hazardous-waste-management-chemical-trash-disposal-and-utilization-plastics-recycling-method-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg" 
                        alt="Feedback Illustration"
                    />
                </div>
            </div>
        </>
    );
}

export default Feedback;
