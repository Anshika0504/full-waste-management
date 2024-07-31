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

        let result = await fetch("http://localhost:8000/create", {
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
            </div>
        </div>
    );
}

export default SumWaste;
