// src/Diary.tsx
import React, { useState, useEffect } from'react';
import NS from 'netschoolapi';

interface DiaryProps {
  origin: string;
  login: string;
  password: string;
  school: string;
}

const Diary: React.FC<DiaryProps> = ({ origin, login, password, school }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [diary, setDiary] = useState<any>(null);

  const handleDateChange = (date: string) => {
    setStartDate(date);
    setEndDate(date);
  };

  const fetchDiary = async () => {
    const user = new NS({
      origin,
      login,
      password,
      school,
    });

    const diaryData = await user.diary({
      start: new Date(startDate),
      end: new Date(endDate),
    });

    setDiary(diaryData.toJSON());
  };

  useEffect(() => {
    if (startDate && endDate) {
      fetchDiary();
    }
  }, [startDate, endDate]);

  return (
    <div>
      <h1>Дневник</h1>
      <input type="date" value={startDate} onChange={(e) => handleDateChange(e.target.value)} />
      {diary && (
        <div>
          {diary.days.map((day: any) => (
            <div key={day.date}>
              <h2>{day.date}</h2>
              {day.lessons.map((lesson: any) => (
                <div key={lesson.id}>
                  <h3>{lesson.subject}</h3>
                  {lesson.assignments.map((assignment: any) => (
                    <div key={assignment.id}>
                      <p>{assignment.text}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Diary;