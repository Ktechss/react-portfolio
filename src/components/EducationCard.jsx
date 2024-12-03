// src/components/EducationCard.js
import React from 'react';
import './EducationCard.css';

const EducationCard = ({ courseName, startDate, endDate, university }) => {
  return (
    <div className="education-card">
      <div className="education-details">
        <p className="course-name">{courseName}</p>
        <p className="course-dates">{startDate} - {endDate}</p>
      </div>
      <p className="university-name">{university}</p>
    </div>
  );
};

export default EducationCard;
