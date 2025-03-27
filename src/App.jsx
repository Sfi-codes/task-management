import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      content: 'complete task-management project',
      rating: 'medium'
    },
    {
      id: 1,
      content: 'setup entega open source project',
      rating: 'hard'
    }
  ])

  const addTask = (event) => {
    event.preventDefault()
    const newTask = {
      id: Math.random(),
      content: event.target.content.value,
      rating: event.target.rating.value
    }
    setTasks([...tasks, newTask]);

  }

  const removeTask = (id) => {

    setTasks(tasks.filter(task => task.id !== id))
  }

  const displayTasks = () => {
    return (
      <div>{tasks.map(item => {
        return (
          <p key={item.id}>{item.content} Rating: {item.rating} <button onClick={() => removeTask(item.id)}>remove</button></p>
        )
      })}</div>
    )
  }

  return (
    <div>
      <form onSubmit={addTask}>
        <input id='content'></input>
        <input id='rating'></input>
        <button>add</button></form>
      {displayTasks()}
    </div>
  )
}

export default App
