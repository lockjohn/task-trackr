import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'USPO appt',
        day: 'Jan 1st at 2:00pm',
        reminder: false,
      },
      {
        id: 2,
        text: 'Drs appt',
        day: 'Jan 1st at 3:00pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Dinner w/ boo',
        day: 'Feb 1st at 9:00pm',
        reminder: true,
      }
    ]
  )
/// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}


  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks to list' }
    </div>
  );
}

export default App;
