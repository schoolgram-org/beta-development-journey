import React from 'react';

const LessonCard = ({ lesson }) => {
  return (
    <div className="lesson-card">
      <h2>{lesson.subject}</h2>
      <p>Время начала: {lesson.startDate}</p>
      <p>Время конца: {lesson.endDate}</p>
      <h3>Домашнее задание:</h3>
      <ul>
        {lesson.assignments.map((assignment) => (
          <li key={assignment.id}>{assignment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonCard;
