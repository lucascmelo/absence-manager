import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import Details from '../../components/Details';
import Moment from 'react-moment';
import download from 'downloadjs';
import "./style.css";

interface Absence {
  id: number;
  employee: string;
  type: string;
  startDate: Date;
  endDate: Date;
  confirmedAt: Date;
  rejectedAt: Date;
}

const Report: React.FC = () => {
  const [loaded, setLoaded] = useState<Number>(0);
  const [absences, setAbsences] = useState<Absence[]>([]);
  const [absenceDetails, setAbsenceDetails] = useState<Absence[]>([]);
  const [totalPage, setTotalPage] = useState<Number>(0);
  const [currentPage, setCurrentPage] = useState<Number>(1);

  const [nameFilter, setNameFilter] = useState<String>('');
  const [typeFilter, setTypeFilter] = useState<String>('');
  const [statusFilter, setStatusFilter] = useState<String>('');
  const [startFilter, setStartFilter] = useState<String>('');
  const [endFilter, setEndFilter] = useState<String>('');

  function findAll() {
    api.get('/absences').then(response => {
      setTimeout(function(){
        setLoaded(1);
      }, 2500); // taking a while to see the loader

      setAbsences(response.data);
      setTotalPage(Math.ceil(response.data.length/10));
    });
  }

  useEffect(() => {
    if(nameFilter !== "" || typeFilter !== "" || statusFilter !== "" || startFilter !== "" || endFilter !== "") {
      console.log(startFilter);
      api.get('/absences', {
        params: {
          employee: nameFilter,
          type: typeFilter,
          status: statusFilter,
          startDate: startFilter,
          endDate: endFilter,
        }
      }).then(response => {
        setLoaded(1);
        setAbsences(response.data);
        setTotalPage(Math.ceil(response.data.length/10));
      });
    } else {
      findAll();
    }
  }, [nameFilter, typeFilter, statusFilter, startFilter, endFilter]);

  function handlePagination(page: number) {
    setCurrentPage(page);
  }

  const handleCloseDetails = (event: any) => {
    event.preventDefault();
    setAbsenceDetails([]);
  }

  const handleDetails = (event:any) => {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');
    const absence = absences.filter(absence => absence.id === parseInt(id));
    setAbsenceDetails(absence);
  }

  const handleDownloadICal = (event:any) => {
    event.preventDefault();
    api.get('/download', {params: {id: event.target.getAttribute('data-id')}}).then(response => {
      download(response.data.ics, "event.ics");
    });
  }

  return (
    <>
      {loaded===0 && <Loader />}
      <Header />
      <section className="container">
        <h2 className="page-title">Absence Management</h2>

        <nav className="absence-tab">
          <a href="#calendar">Calendar</a>
          <a href="#statistics">Statistics</a>
          <a href="#graph">Graph</a>
          <a href="#requests">Open Requests</a>
          <a href="#list" className='active'>List</a>
        </nav>

        <form>
          <fieldset>
            <legend>Filter</legend>
            <div className="fields">
              <div>
                <label>Employee</label>
                <input type="text" onChange={e => setNameFilter(e.target.value)}/>
              </div>
              <div>
                <label>Absence Types</label>
                <select onChange={e => setTypeFilter(e.target.value)}>
                  <option value="">All</option>
                  <option value="vacation">Vacation</option>
                  <option value="sickness">Sickness</option>
                  <option value="compensatory">Compensatory time off</option>
                  <option value="education">Education/Training</option>
                  <option value="other">Other absence</option>
                </select>
              </div>
              <div>
                <label>Status</label>
                <select onChange={e => setStatusFilter(e.target.value)}>
                  <option value="">All</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <div>
                <label>Start Date</label>
                <input type="date" onChange={e => setStartFilter(e.target.value)} />
              </div>
              <div>
                <label>End Date</label>
                <input type="date" onChange={e => setEndFilter(e.target.value)} />
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
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {absences.map((absence, index) => {
              let page = Math.ceil((index+1)/10);
              if(currentPage == page) {
                return (
                  <tr data-page={page} key={absence.id} >
                    <td data-title="Name">{absence.employee}</td>
                    <td data-title="Absence Types">{absence.type === "vacation" ? "is on vacation" : "is sick"}</td>
                    <td data-title="Period">
                      <Moment format="DD/MM/YYYY">{absence.startDate}</Moment> to <Moment format="DD/MM/YYYY">{absence.endDate}</Moment>
                    </td>
                    <td data-title="Status">{(absence.confirmedAt === null && absence.rejectedAt === null) ? 'Pending' : (absence.confirmedAt === null) ? 'Rejected' : 'Approved' }</td>
                    <td>
                      <button type="button" data-id={absence.id} onClick={handleDownloadICal}> Download Ical</button>
                      <button type="button" data-id={absence.id} onClick={handleDetails}>See note</button>
                    </td>
                  </tr>
                )
              }
            })}
            {totalPage === 0 && (
              <tr>
                <td colSpan={5}>We couldn't find anything.</td>
              </tr>
            )}
          </tbody>
        </table>

        <ul className="pagination">
          {[...Array(totalPage)].map((x, i) => {
            let page = ++i;
            return (
              <li key={i} className={(currentPage === page ) ? 'active' : ''} onClick={() => handlePagination(page)}>{page}</li>
            )
          })}
        </ul>
      </section>
      {absenceDetails.length>0 && <Details data={absenceDetails} func={handleCloseDetails} />}
      <Footer />
    </>
  )
}

export default Report;
