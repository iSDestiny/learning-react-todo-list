import React from 'react';
import { Paper, List, ListItem } from '@material-ui/core';
import Task from './Task';

const TaskList = props => {
	return (
		<Paper>
			<List>
				{props.tasks.map((task, index) => (
					<ListItem
						divider={index !== props.tasks.length - 1}
						key={task.id}
					>
						<Task
							task={task.task}
							id={task.id}
							setTask={props.setTask}
						></Task>
					</ListItem>
				))}
			</List>
		</Paper>
	);
};

export default TaskList;
