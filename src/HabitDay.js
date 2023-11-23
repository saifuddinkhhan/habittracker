// HabitDay.js
import React from 'react';

function HabitDay({ dayIndex, status, updateHabitStatus }) {
  const handleStatusChange = () => {
    const newStatus = status === 'done' ? 'not-done' : status === 'not-done' ? 'none' : 'done';
    updateHabitStatus(dayIndex, newStatus);
  };

  return (
    <div
      className={`habit-day ${status}`}
      onClick={handleStatusChange}
    >
      {status === 'none' ? 'O' : status === 'done' ? '✔' : '✘'}
    </div>
  );
}

export default HabitDay;
