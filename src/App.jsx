// // import React, { useReducer } from 'react'


// // function App() {
// // const initialTasks = [
// //     {id:1, text: "gp to church" , done: false},
// //     {id:2, text: "gp to home" , done: true},
// //     {id:3, text: "eat food" , done: true}
// // ]

// //     const tasksreducer = (tasks, action) => {
// //             switch(action.type)
// //     }
// //     const [tasks, dispatch] = useReducer(
// //         tasksreducer,
// //         initialTasks
// //     )
// //   return (
// //     <div>App</div>
// //   )
// // }

// // export default App

// import React from 'react'
// import HookCounterThree from './HookCounterThree'

// function App() {
//   return (
//     <div>
//       <HookCounterThree/>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
function App() {

  const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
  ];

  const [ tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (task) => {
    setTasks([...tasks, { id: tasks.length, text: task, done: false}])

  }

  function handleChangeTask(task){
    tasks.map((t) =>{
      if(t.id === task.id) {
        return task;
      }
      else{
        return t;
      }
    })
  }
  return (
    <>
    <h1>Prague itinerary</h1>
   
    <AddTask onAddTask={handleAddTask} />
    <TaskList
      tasks={tasks}
      onChangeTask={handleChangeTask}
      // onDeleteTask={handleDeleteTask}
    />
  </>
  )
}

export default App