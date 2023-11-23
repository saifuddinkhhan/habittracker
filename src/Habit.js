import React, { useState } from 'react';
import HabitDay from './HabitDay';

function Habit({ habit, updateHabitStatus, deleteHabit, updateHabitName }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatedHabitName, setUpdatedHabitName] = useState(habit.name);

  const handleStatusChange = (dayIndex, newStatus) => {
    updateHabitStatus(habit.id, dayIndex, newStatus);
  };

  const handleUpdate = () => {
    updateHabitName(habit.id, updatedHabitName);
    setShowUpdateModal(false);
  };

  return (
    <div className="habit">
      <h2>{habit.name}</h2>
      <div className="habit-days">
        {habit.days.map((status, dayIndex) => (
          <HabitDay
            key={dayIndex}
            status={status}
            dayIndex={dayIndex}
            habitId={habit.id}
            updateHabitStatus={handleStatusChange}
          />
        ))}
      </div>
      <button onClick={() => deleteHabit(habit.id)}>Delete</button>
      <button onClick={() => setShowUpdateModal(true)}>Update</button>

      {showUpdateModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowUpdateModal(false)}>
              &times;
            </span>
            <h2>Update Habit</h2>
            <input
              type="text"
              placeholder="Enter Updated Habit Name"
              value={updatedHabitName}
              onChange={(e) => setUpdatedHabitName(e.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Habit;
