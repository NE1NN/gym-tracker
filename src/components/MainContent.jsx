import WorkoutList from "./WorkoutList";
import { useState } from "react";

function MainContent() {

  const [workoutList, setWorkoutList] = useState([]);
  const [workout, setWorkout] = useState("");

  function handleChange(event) {
    setWorkout(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setWorkoutList(prevWorkoutList => [...prevWorkoutList, workout]);
    setWorkout("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  }

  const workoutItems = workoutList.map(workout => <WorkoutList workout={workout} />);

  return (
    <main className="main-content">
      <h1>Today&apos;s Workout</h1>
      <form>
        <input 
          type="text" 
          name="workout" 
          size="100"
          placeholder="Workout Name"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={workout}
        />
        <button id="submit-btn" onClick={handleSubmit}>+</button>
      </form>
      <div class="workout-list">
        {workoutItems}
      </div>
    </main>
  )
}

export default MainContent;