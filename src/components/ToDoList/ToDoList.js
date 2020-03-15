import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

const ToDoList = props => {
	const [tasks, setTasks] = useState([
		{ id: Math.random(), task: 'Gym' },
		{ id: Math.random(), task: 'Cook' }
	]);

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Learning React: To Do List</h1>
			<AddTask tasks={tasks} addTask={setTasks} />
			{tasks.length > 0 && <TaskList tasks={tasks} setTask={setTasks} />}
		</div>
	);
};

export default ToDoList;
