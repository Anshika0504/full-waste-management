import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateWaste.css';


function SumWaste() {
    const [Name, setName] = useState("");
    const [Type, setType] = useState("");
    const [Desc, setDesc] = useState("");
    const [Comp, setComp] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const addWaste = async () => {
        if (!Name || !Type || !Desc || !Comp) {
            setError(true);
            return false;
        }

        let result = await fetch("http://localhost:4000/create", {
            method: "POST",
            body: JSON.stringify({ Name, Type, Desc, Comp }),
            headers: {
                "Content-Type": "application/json"
            }
            
        });

        result = await result.json();
        console.warn(result);
       

        // Clear form and reset error state if needed
        if (result) {
            setName("");
            setType("");
            setDesc("");
            setComp("");
            setError(false);
            navigate("/"); // Navigate after successful addition
        }
    };

    return (
        <div>
            <div className="product">
                <h1>Add Waste In The List</h1>
                <input
                    type="text"
                    value={Name}
                    placeholder="Enter Your Name"
                    className='inputbox'
                    onChange={(e) => setName(e.target.value)}
                />
                {error && !Name && <span className='invalid-input'>Enter Valid Name</span>}
                <input
                    type="text"
                    value={Type}
                    placeholder="Enter Type Of Waste"
                    className='inputbox'
                    onChange={(e) => setType(e.target.value)}
                />
                {error && !Type && <span className='invalid-input'>Enter Valid Type</span>}
                <input
                    type="text"
                    value={Desc}
                    placeholder="Enter Some Description"
                    className='inputbox'
                    onChange={(e) => setDesc(e.target.value)}
                />
                {error && !Desc && <span className='invalid-input'>Enter Valid Description</span>}
                <input
                    type="text"
                    value={Comp}
                    placeholder="Enter The Area Of Complain"
                    className='inputbox'
                    onChange={(e) => setComp(e.target.value)}
                />
                {error && !Comp && <span className='invalid-input'>Enter Valid Complain Area</span>}
                <button className='btn' onClick={addWaste}>Add Waste</button>
                <img className='gif'src="https://imgs.search.brave.com/p-SeEOG6fdRJrfSbJaBmzauUcfrVLLvzqTtmyTYV-cg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEuZ2lwaHkuY29t/L21lZGlhL0RoOFVM/T3FtVnhIR29HU3Jr/dS9naXBoeS5naWY_/Y2lkPTc5MGI3NjEx/bmNjcWxnOXFzb2U2/MHRsaWE0enhwbjVq/dnZzbDh2NGF3bHgx/dWVhNiZlcD12MV9n/aWZzX3NlYXJjaCZy/aWQ9Z2lwaHkuZ2lm/JmN0PWc.gif" alt="gif"></img>

            </div>
        </div>
    );
}

export default SumWaste;
