import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import '../Styles/Schedule.css';

const Schedule = () => {
  return (
    <>
     

    <div className="schedule-container">
    <h2>Wedding Event</h2>
      <div className="event-card">
        <div className="event-card-content">
          <div className="event-details">
            <div className="date-time">
              <div className="event-detail">
                <FaCalendarAlt className="event-icon" />
                <span>10-02-2025</span>
              </div>
              <div className="event-detail">
                <FaClock className="event-icon" />
                <span>11:20 AM - 12:10 AM</span>
              </div>
            </div>
            <div className="event-detail">
              <FaMapMarkerAlt className="event-icon" />
              <span style={{fontSize:'25px'}}>Downtown Conference Hall</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Schedule;
