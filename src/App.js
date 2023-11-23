import React, { useState } from 'react';
import HabitList from './HabitList';
import './App.css';

// ... (previous code)

function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Exercise', days: Array(7).fill('none') },
    { id: 2, name: 'Read', days: Array(7).fill('none') },
    // Add more habits as needed
  ]);

  const [showAddHabitModal, setShowAddHabitModal] = useState(false);
  const [newHabitName, setNewHabitName] = useState('');
  const [isAddingHabit, setIsAddingHabit] = useState(false);

  const updateHabitStatus = (habitId, dayIndex, status) => {
    setHabits((prevHabits) => {
      const updatedHabits = [...prevHabits];
      const habitIndex = updatedHabits.findIndex((habit) => habit.id === habitId);
      updatedHabits[habitIndex].days[dayIndex] = status;
      return updatedHabits;
    });
  };

  const deleteHabit = (habitId) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== habitId));
  };

  const updateHabitName = (habitId, newName) => {
    setHabits((prevHabits) => {
      const updatedHabits = [...prevHabits];
      const habitIndex = updatedHabits.findIndex((habit) => habit.id === habitId);
      updatedHabits[habitIndex].name = newName;
      return updatedHabits;
    });
  };

  const addHabit = () => {
    if (newHabitName.trim() === '') {
      alert('Habit name cannot be empty');
      return;
    }

    const newHabit = {
      id: habits.length + 1,
      name: newHabitName,
      days: Array(7).fill('none'),
    };

    setHabits((prevHabits) => [...prevHabits, newHabit]);
    setShowAddHabitModal(false);
    setNewHabitName('');
    setIsAddingHabit(false);
  };

  const addHabitModal = () => {
    setShowAddHabitModal(true);
  };

  return (
    <div className="App">
      <h1>HABIT TRACKER</h1>
      <HabitList
        habits={habits}
        updateHabitStatus={updateHabitStatus}
        deleteHabit={deleteHabit}
        updateHabitName={updateHabitName}
      />
      <button onClick={addHabitModal}>Add Habit</button>

      {showAddHabitModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowAddHabitModal(false)}>
              &times;
            </span>
            <h2>Add New Habit</h2>
            <input
              type="text"
              placeholder="Enter Habit Name"
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
            />
            <button onClick={addHabit} disabled={isAddingHabit}>
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

