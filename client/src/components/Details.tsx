import React from 'react';
import Moment from 'react-moment';

interface Absence {
  id: number;
  employee: string;
  type: string;
  startDate: Date;
  endDate: Date;
  confirmedAt: Date;
  rejectedAt: Date;
}

const Details = ({data, func}: any) => {
  const absence = data[0];

  return (
    <div id="detailsModal">
      <section>
        <button type="button" className="icon-close" onClick={func}><span>Close</span></button>
        <h4>Details</h4>
        <ul>
          <li>
            <h5>Name</h5>
            <p>{absence.employee}</p>
          </li>
          <li>
            <h5>Absence Type</h5>
            <p>{absence.type === "vacation" ? "is on vacation" : "is sick"}</p>
          </li>
          <li>
            <h5>From</h5>
            <p><Moment format="DD/MM/YYYY">{absence.startDate}</Moment></p>
          </li>
          <li>
            <h5>To</h5>
            <p><Moment format="DD/MM/YYYY">{absence.endDate}</Moment></p>
          </li>
          <li className="modal--note">
            <h5>Comment from admitter (Optional)</h5>
            <p>{(absence.admitterNote) ? absence.admitterNote : '-'}</p>
          </li>
          <li className="modal--note">
            <h5>Note (Optional)</h5>
            <p>{(absence.memberNote) ? absence.memberNote : '-'}</p>
          </li>
        </ul>
      </section>
    </div>
  )
}
export default Details;

