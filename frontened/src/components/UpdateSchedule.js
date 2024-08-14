import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateSchedule() {
    const [HouseNo, setHouseNo] = useState("");
    const [WorkerName, setWorkerName] = useState("");
    const [WorkerId, setWorkerId] = useState("");
    const [Timings, setTimings] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getSchDetails();
    }, [params.id]); // Adding params.id as a dependency to ensure it runs when id changes

    const getSchDetails = async () => {
        try {
            let result = await fetch(`http://localhost:4000/getsch/${params.id}`);
            result = await result.json(); // Parse response to JSON
            setHouseNo(result.HouseNo);
            setWorkerId(result.WorkerId);
            setWorkerName(result.WorkerName);
            setTimings(result.Timings);
        } catch (error) {
            console.error('Error fetching waste details:', error);
        }
    };

    const updateSch = async () => {
        try {
            let result = await fetch(`http://localhost:8000/updatesch/${params.id}`, {
                method: "PUT",
                body: JSON.stringify({ HouseNo,WorkerId,WorkerName,Timings}),
                headers: {
                    'Content-Type': "application/json",
                }
            });
            result = await result.json(); // Parse response to JSON
            navigate("/schedule");
        } catch (error) {
            console.error('Error updating schedule:', error);
        }
    };

    return (
        <div className='main'>
            <div className="product">
                <h1>Update Schedule</h1>
                <input type="text" value={HouseNo} placeholder='Enter The HouseNo' className='inputbox' onChange={(e) => setHouseNo(e.target.value)} />
                <input type="text" value={WorkerId} placeholder='Enter The WorkerId' className='inputbox' onChange={(e) => setWorkerId(e.target.value)} />
                <input type="text" value={WorkerName} placeholder='Enter The WorkerName' className='inputbox' onChange={(e) => setWorkerName(e.target.value)} />
                <input type="text" value={Timings} placeholder='Enter The Timings' className='inputbox' onChange={(e) => setTimings(e.target.value)} />
                <button className='btn' onClick={updateSch}>Update Waste</button>
            </div>
           
        </div>
    );
}

export default UpdateSchedule
