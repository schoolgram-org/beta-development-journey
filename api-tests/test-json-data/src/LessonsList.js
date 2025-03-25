import React from 'react';
import LessonCard from './LessonCard';

const LessonsList = ({ lessons }) => {
  return (
    <div className="lessons-list">
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
};

export default LessonsList;
