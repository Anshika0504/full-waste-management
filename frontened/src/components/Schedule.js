import React from 'react'
import './Schedule.css'
function Schedule() {
  return (
    <div className='schedule'>
      <h1>See Your Schedule Here</h1>
      <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">SR.NO</th>
      <th scope="col">House No</th>
      <th scope="col">Date</th>
      <th scope="col">Worker Name</th>
      <th scope="col">Worker Id</th>
      <th scope="col">Timings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Schedule
