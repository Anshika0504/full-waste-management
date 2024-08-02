import React, { useEffect, useState } from 'react'
import './Schedule.css'
import { Link } from 'react-router-dom';
function Schedule() {
  const [Schedule, setSchedule] = useState([]);

  useEffect(() => {
      getSchedule();
  }, []);

  const getSchedule = async () => {
      try {
          let result = await fetch("http://localhost:4000/getAllsch", {
              method: "GET",
          });
          result = await result.json();
          setSchedule(result);
      } catch (error) {
          console.log("Error in fetching wastes");
      }
  };

  const deleteSchedule = async (id) => {
      try {
          let result = await fetch(`http://localhost:4000/deletesch/${id}`, {
              method: "DELETE",
          });
          result = await result.json();
          if (result) {
              getSchedule();
          }
      } catch (error) {
          console.log('Error in deleting the waste from the list');
      }
  };

  const searchHandle = async (event) => {
      let key = event.target.value;
      if (key) {
          try {
              let result = await fetch(`http://localhost:4000/search/${key}`);
              result = await result.json();
              setSchedule(result);
          } catch (error) {
              console.error('Error searching products:', error);
          }
      } else {
          getSchedule();
      }
  };

  return (
      <div className='waste-list'>
          <h1>Schedule List</h1>
          <input className="search" type="text" placeholder='Search Schedule' onChange={searchHandle} />
          <ul className='waste'>
              <li className='waste'>S.No</li>
              <li>HouseNo</li>
              <li>WprkerID</li>
              <li>WokerName</li>
              <li>Timings</li>
              <li>Operations</li>
          </ul>
          {
              Schedule.length > 0 ? Schedule.map((item, index) => (
                  <ul key={item._id}>
                      <li>{index + 1}</li>
                      <li>{item.HouseNo}</li>
                      <li>{item.WorkerName}</li>
                      <li>{item.WorkerId}</li>
                      <li>{item.Timings}</li>
                      <li>
                          <button className='link' onClick={() => deleteSchedule(item._id)}>Delete</button>
                          <Link className='link' to={"/updatesch/" + item._id}>Update</Link>
                      </li>
                  </ul>
              )) : <p>No Schedule found.</p>
          }
          <br></br>
          <Link className='links' to={"/addSchedule"}>Add Schedule</Link>
      </div>
  );
}

export default Schedule
