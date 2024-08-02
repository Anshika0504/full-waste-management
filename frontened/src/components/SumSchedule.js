import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Schedule from './Schedule';

function SumSchedule() {
        const [HouseNo, setHouseNo] = useState("");
        const [WorkerId, setWorkerId] = useState("");
        const [WorkerName, setWorkerName] = useState("");
        const [Timings, setTimings] = useState("");
        const [error, setError] = useState(false);
        const navigate = useNavigate();
    
        const addSch = async () => {
            if (!HouseNo || !WorkerId || !WorkerName || !Timings) {
                setError(true);
                return false;
            }
    
            let result = await fetch("http://localhost:4000/createsch", {
                method: "POST",
                body: JSON.stringify({ HouseNo,WorkerId,WorkerName,Timings }),
                headers: {
                    "Content-Type": "application/json"
                }
                
            });
    
            result = await result.json();
            console.warn(result);
           
    
            // Clear form and reset error state if needed
            if (result) {
                setHouseNo("");
                setWorkerId("");
                setWorkerName("");
                setTimings("");
                setError(false);
                navigate("/schedule"); 
            }
        };
    
        return (
            <div>
                <div className="product">
                    <h1>Add Schedule</h1>
                    <input
                        type="text"
                        value={HouseNo}
                        placeholder="Enter HouseNo"
                        className='inputbox'
                        onChange={(e) => setHouseNo(e.target.value)}
                    />
                    {error && !HouseNo && <span className='invalid-input'>Enter Valid HouseNo</span>}
                    <input
                        type="text"
                        value={WorkerId}
                        placeholder="Enter The Worker Id"
                        className='inputbox'
                        onChange={(e) => setWorkerId(e.target.value)}
                    />
                    {error && !WorkerId && <span className='invalid-input'>Enter Valid Worker Id</span>}
                    <input
                        type="text"
                        value={WorkerName}
                        placeholder="Enter The Worker Name"
                        className='inputbox'
                        onChange={(e) => setWorkerName(e.target.value)}
                    />
                    {error && !WorkerName && <span className='invalid-input'>Enter Valid WorkerName</span>}
                    <input
                        type="text"
                        value={Timings}
                        placeholder="Enter The Timings Of Cleaning"
                        className='inputbox'
                        onChange={(e) => setTimings(e.target.value)}
                    />
                    {error && !Timings && <span className='invalid-input'>Enter The Timimgs</span>}
                    <button className='btn' onClick={addSch}>Add Schedule</button>
                </div>
            </div>
        );
    }

export default SumSchedule
