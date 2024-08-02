import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './AddWaste.css';

function AddWaste() {
    const [wastes, setWastes] = useState([]);

    useEffect(() => {
        getWastes();
    }, []);

    const getWastes = async () => {
        try {
            let result = await fetch("http://localhost:8000/getAll", {
                method: "GET",
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
                            <div className='btns'>
                            <button className='link' onClick={() => deleteWaste(item._id)}>Delete</button>
                            <Link className='link' to={"/update/" + item._id}>Update</Link>
                            </div>
                           
                        </li>
                    </ul>
                )) : <p>No waste items found.</p>
            }
            <br></br>
            
            <Link className='links' to={"/add"}>Add Complain</Link>
            <img className='gif' src="https://imgs.search.brave.com/G1mhaUrJt5WqwJZTpq1h0xhpvLNp28PB86I8ZRQOJWY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5pbWF0ZWRpbWFn/ZXMub3JnL2RhdGEv/bWVkaWEvNTc2L2Fu/aW1hdGVkLWdhcmJh/Z2UtYmluLWltYWdl/LTAwMDUuZ2lm.gif" alt="dustbin-gif"></img>
        </div>
    );
}

export default AddWaste;
