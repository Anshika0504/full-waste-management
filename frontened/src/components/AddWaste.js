import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './AddWaste.css'
import UpdateWaste from './UpdateWaste';
function AddWaste() {
    const [wastes, setWastes] = useState([]);

    useEffect(() => {
        getWastes();
    }, []);

    const getWastes = async () => {
        try {
            let result = await fetch("http://localhost:8000/getAll", {
                method: "get",
            });
            result = await result.json();
            setWastes(result);
        } catch (error) {
            console.log("Error in fetching wastes");
        }
    };

    const deleteWaste = async (id) => {
        try {
            let result = await fetch(`http://localhost:8000/delete/${id}`, {
                method: "DELETE",
            });
            result = await result.json();
            if (result) {
                getWastes();
            }
        } catch (error) {
            console.log('Error in deleting the waste from the list');
        }
    };
    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            try {
                let result = await fetch(`http://localhost:8000/search/${key}`);
                result = await result.json();
                setWastes(result);
            } catch (error) {
                console.error('Error searching products:', error);
            }
        } else {
            getWastes();
        }
    };

    return (
        <div className='waste-list'>
            <h1>Waste List</h1>
            <input className="search" type="text" placeholder='Search Product' onChange={searchHandle} />
            <ul className='waste'>
                <li className='waste'>S.No</li>
                <li>Name</li>
                <li>Type</li>
                <li>Description</li>
                <li>Complain</li>
                <li>Operations</li>
            </ul>
            
           
            {
                wastes.length > 0 ? wastes.map((item, index) => (
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.Name}</li>
                        <li>{item.Type}</li>
                        <li>{item.Desc}</li>
                        <li>{item.Comp}</li>
                        <li>
                            <button onClick={() => deleteWaste(item._id)}>Delete</button>
                           <Link to={"/update/"+item._id}>Update</Link>
                        </li>
                    </ul>
                )) : <p>No waste items found.</p>
            }
        </div>
    );
}

export default AddWaste;
