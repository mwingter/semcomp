import React from "react";
import "./style.css";

import EventsCalendar from "../../../components/events-calendar";

const Schedule = () => {
  return (
    <div id="schedule" className="home-schedule-container">
      <h2 className="pt-lang">Cronograma</h2>
      <h2 className="en-lang">Schedule</h2>
      <div className="schedule-container">
        <EventsCalendar />
      </div>
    </div>
  );
};

export default Schedule;
