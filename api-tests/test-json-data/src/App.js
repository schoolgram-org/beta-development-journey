import React from 'react';
import LessonsList from './LessonsList';
import data from './data.json';

const App = () => {
  return (
    <div>
      <LessonsList lessons={data.days[0].lessons} />
    </div>
  );
};

export default App;
