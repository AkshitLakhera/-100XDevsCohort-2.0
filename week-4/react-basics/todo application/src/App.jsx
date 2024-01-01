import { useState } from 'react'
import './App.css'
export default App
function App() {
  const [titlevalue,settitle]=useState('');
  const [descriptionvalue,setdescriptionvalue]=useState('');
  const [tasks,setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([
          ...tasks,
          {
            id: Date.now(),
            title: titlevalue,
            description: descriptionvalue,
          },
        ]);
        settitle('');
        setdescriptionvalue('');
      };
    

  const handletitle = (event) => {
    settitle(event.target.value)
  }
  const handledescription = (event) => {
    setdescriptionvalue(event.target.value)
  }
  const handleDelete = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
      };
  const handleEdit = (task) => {
  setEditingTask(task)
 }
 const handleSave = () => {
  const updatedTasks = tasks.map((task) =>
    task.id === editingTask.id ? editingTask : task
  );
  setTasks(updatedTasks);
  setEditingTask(null);
};
  return (
    <div>
        <form  onSubmit={handleSubmit}>
    <input type="text" placeholder='Title' 
    value={titlevalue} 
    onChange={handletitle}/>
    <br></br>
    <input type= "text" placeholder='description'
    value={descriptionvalue}
    onChange={handledescription}/>
    <br></br>
    <button type='submit'>Add task</button>
    </form>
     {tasks.map((task) => (
    <div  key={task.id}>
      <p> title :{task.title}  </p>
      <p> description : {task.description}  </p>
      <button onClick={() => {handleDelete(task.id)  }}>Delete</button>
      {editingTask?.id  !== task.id &&
      ( <button onClick={() => handleEdit(task)}>Edit</button>)
      }
      {editingTask?.id === task.id && (
        <div>
          <input
          type='text'
          placeholder='edit titile'
          onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
          value={editingTask.title}/>
          <input
                type="text"
                value={editingTask.description}
                onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
              />
               <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
     ))
}
</div> )
// const [taskTitle, setTaskTitle] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [tasks, setTasks] = useState([]);
//   const [editingTask, setEditingTask] = useState(null);

//   const handleTaskSubmit = (e) => {
//     e.preventDefault();
//     setTasks([
//       ...tasks,
//       {
//         id: Date.now(),
//         title: taskTitle,
//         description: taskDescription,
//       },
//     ]);
//     setTaskTitle('');
//     setTaskDescription('');
//   };

//   const handleTitleChange = (e) => {
//     setTaskTitle(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setTaskDescription(e.target.value);
//   };

//   const handleDelete = (taskId) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleEdit = (task) => {
//     setEditingTask(task);
//   };

//   const handleSave = () => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === editingTask.id ? editingTask : task
//     );
//     setTasks(updatedTasks);
//     setEditingTask(null);
//   };

//   return (
//     <div>
//       <form onSubmit={handleTaskSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={taskTitle}
//           onChange={handleTitleChange}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Description"
//           value={taskDescription}
//           onChange={handleDescriptionChange}
//         />
//         <br />
//         <button type="submit">Add Task</button>
//       </form>

//       {tasks.map((task) => (
//         <div key={task.id}>
//           <p>Title: {task.title}</p>
//           <p>Description: {task.description}</p>
//           <button onClick={() => handleDelete(task.id)}>Delete</button>
//           {editingTask?.id !== task.id && (
//             <button onClick={() => handleEdit(task)}>Edit</button>
//           )}
//           {editingTask?.id === task.id && (
//             <div>
//               <input
//                 type="text"
//                 value={editingTask.title}
//                 onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
//               />
//               <input
//                 type="text"
//                 value={editingTask.description}
//                 onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
//               />
//               <button onClick={handleSave}>Save</button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
}