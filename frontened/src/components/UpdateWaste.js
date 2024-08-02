import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateWaste.css';

function UpdateWaste() {
    const [Name, setName] = useState("");
    const [Type, setType] = useState("");
    const [Desc, setDesc] = useState("");
    const [Comp, setComp] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getWasteDetails();
    }, [params.id]); // Adding params.id as a dependency to ensure it runs when id changes

    const getWasteDetails = async () => {
        try {
            let result = await fetch(`http://localhost:8000/get/${params.id}`);
            result = await result.json(); // Parse response to JSON
            setName(result.Name);
            setType(result.Type);
            setDesc(result.Desc);
            setComp(result.Comp);
        } catch (error) {
            console.error('Error fetching waste details:', error);
        }
    };

    const updateWaste = async () => {
        try {
            let result = await fetch(`http://localhost:8000/update/${params.id}`, {
                method: "PUT",
                body: JSON.stringify({ Name, Type, Desc, Comp }),
                headers: {
                    'Content-Type': "application/json",
                }
            });
            result = await result.json(); // Parse response to JSON
            navigate("/");
        } catch (error) {
            console.error('Error updating waste:', error);
        }
    };

    return (
        <div>
            <div className="product">
                <h1>Update Waste List</h1>
                <input type="text" value={Name} placeholder='Enter Your Name' className='inputbox' onChange={(e) => setName(e.target.value)} />
                <input type="text" value={Type} placeholder='Enter Type Of Waste' className='inputbox' onChange={(e) => setType(e.target.value)} />
                <input type="text" value={Desc} placeholder='Enter Some Description' className='inputbox' onChange={(e) => setDesc(e.target.value)} />
                <input type="text" value={Comp} placeholder='Enter The Area Of Complain' className='inputbox' onChange={(e) => setComp(e.target.value)} />
                <button className='btn' onClick={updateWaste}>Update Waste</button>
      
            </div>
        </div>
    );
}

export default UpdateWaste;
