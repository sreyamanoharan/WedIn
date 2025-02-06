import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import '../Styles/Schedule.css';

const Schedule = () => {
  return (
    <>
     

    <div className="schedule-container" >
    <h2 className="wed-head">Wedding Events</h2>
      <div className="event-card">
        <div className="event-card-content">
          <p className="headwed">Wedding</p>
          <div className="event-details">
            <div className="date-time">
              <div className="event-detail">
                <FaCalendarAlt className="event-icon" />
                <span>10-02-2025</span>
              </div>
              <div className="event-detail">
                <FaClock className="event-icon" />
                <span>11:20 AM - 12:10 PM</span>
              </div>
            </div>
            <div className="event-detail">
              <a href="https://maps.app.goo.gl/n32vk66kAdVUk39P9">
              <FaMapMarkerAlt className="event-icons"/>
              </a>
              <span style={{fontSize:'25px'}}>Kabani Auditorium , Pulpally</span>
            </div>
          </div>
        </div>
      </div>
      <div className="event-card">
        <div className="event-card-content">
        <p className="headwed">Reception</p>

          <div className="event-details">
            <div className="date-time">
              <div className="event-detail">
                <FaCalendarAlt className="event-icon" />
                <span>10-02-2025</span>
              </div>
              <div className="event-detail">
                <FaClock className="event-icon" />
                <span>6 PM - 9 PM</span>
              </div>
            </div>
            <div className="event-detail">
            <a href="https://maps.app.goo.gl/T8xj5St6pJimmmxD7">
              <FaMapMarkerAlt className="event-icons" />
              </a>
              <span style={{fontSize:'25px'}}>  Sacred Heart Jubilee Hall ,Kalpetta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Schedule;
