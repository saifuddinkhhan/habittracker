import React from 'react';
import Habit from './Habit';

function HabitList({ habits, updateHabitStatus, deleteHabit, updateHabitName }) {
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <div key={habit.id} className="habit-card">
          <Habit
            habit={habit}
            updateHabitStatus={updateHabitStatus}
            deleteHabit={deleteHabit}
            updateHabitName={updateHabitName}
          />
        </div>
      ))}
    </div>
  );
}

export default HabitList;
