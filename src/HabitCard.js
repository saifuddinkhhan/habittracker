// Example usage in a parent component
import React from 'react';
import HabitCard from './HabitCard';

function HabitTracker({ habits, updateHabitStatus, deleteHabit }) {
  return (
    <div className="habit-tracker">
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          updateHabitStatus={updateHabitStatus}
          deleteHabit={deleteHabit}
        />
      ))}
    </div>
  );
}

export default HabitTracker;
