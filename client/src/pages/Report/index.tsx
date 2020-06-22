import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header'

import './style.css';
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
    api.get('/absences').then(response => {
      setAbsences(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <section>
        <h2>Report</h2>
        <table>
          <thead>
            <th>Name</th>
            <th>Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Download IC</th>
          </thead>
          {absences.map(absence => (
            <tr key={absence.id}>
              <td>{absence.employee}</td>
              <td>{absence.type}</td>
              <td>{absence.startDate}</td>
              <td>{absence.endDate}</td>
              <td><a href="#download" data-id={absence.id}>Download</a></td>
            </tr>
          ))}
        </table>

      </section>
    </>
  )
}

export default Report;
