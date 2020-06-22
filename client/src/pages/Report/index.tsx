import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Moment from 'react-moment';
import "./style.css";

interface Absence {
  id: number;
  employee: string;
  type: string;
  startDate: Date;
  endDate: Date;
}
const Report: React.FC = () => {
  const [absences, setAbsences] = useState<Absence[]>([]);
  useEffect(() => {
    setTimeout(function(){
      api.get('/absences').then(response => {
        setAbsences(response.data);
      });
    }, 2500); // taking a while to see the loader
  }, []);

  return (
    <>
      {absences.length==0 && <Loader />}
      <Header />
      <section>
        <h2>Report</h2>
        <nav>
          <a href="#">Calendar</a>
          <a href="#">Statistics</a>
          <a href="#">Graph</a>
          <a href="#">Open Requests</a>
          <a href="#" className='active'>List</a>
        </nav>

        <form action="">
          <fieldset>
            <legend>Filter</legend>
            <div className="fields">
              <div>
                <label htmlFor="">Employee</label>
                <input type="text"/>
              </div>
              <div>
                <label htmlFor="">Absence Types</label>
                <select name="status">
                  <option defaultValue="all">All</option>
                  <option value="vacation">Vacation</option>
                  <option value="sickness">Sickness</option>
                  <option value="compensatory" disabled>Compensatory time off</option>
                  <option value="education" disabled>Education/Training</option>
                  <option value="other" disabled>Other absence</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Status</label>
                <select name="status">
                  <option defaultValue="all">All</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Start Date</label>
                <input type="date"/>
              </div>
              <div>
                <label htmlFor="">End Date</label>
                <input type="date"/>
              </div>
            </div>
          </fieldset>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Absence Types</th>
              <th>Period</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {absences.map(absence => (
              <tr key={absence.id}>
                <td>{absence.employee}</td>
                <td>{absence.type}</td>
                <td>{absence.startDate}</td>
                <td>{absence.endDate}</td>
                <td><a href="#download" data-id={absence.id}>Download</a></td>
              </tr>
            ))}
          </tbody>
        </table>

      </section>
    </>
  )
}

export default Report;
