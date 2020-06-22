import React from 'react';
import Header from '../../components/Header'

import './style.css';


const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <section>
        <h2>Rules</h2>

        <h3>User Story</h3>
        <p>As owner of a crew I want to be able to export my employees absences so
  that I can import them into outlook.</p>

        <h3>Acceptance Criteria</h3>
        <ul>
          <li>I can get a list of absences including the names of the employee (using api.js or api.rb)</li>
          <li>I can generate an iCal file and import it into outlook (maybe use a gem or npm package)</li>
          <li>I can see vacations of my employees as "#&#123;member.name&#125; is on vacation" </li>
          <li>I can see sickness of my employees as "#&#123;member.name&#125; is sick" </li>
          <li>(Bonus) I can go to http://localhost:3000 and download the iCal file</li>
          <li>(Bonus) I can go to http://localhost:3000?userId=123 and only receive the absences of the given user</li>
          <li>(Bonus) I can go to http://localhost:3000?startDate=2017-01-01&endDate=2017-02-01 and only receive the absences in the given date range</li>
          <li>(Bonus) Build the first 4 acceptance criteria in the other language (for backend candidates in js and for frontend candidates in ruby)</li>
        </ul>
      </section>
    </>
  )
}

export default Dashboard;
