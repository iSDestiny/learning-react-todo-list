import React, { useState } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
	root: {
		marginLeft: 'auto',
		marginRight: 'auto',
		display: 'flex',
		alignItems: 'center',
		width: 400,
		marginBottom: '1.5em'
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1
	},
	iconButton: {
		padding: 10
	},
	divider: {
		height: 28,
		margin: 4
	}
}));

const AddTask = props => {
	const classes = useStyles();
	const [taskInput, setTaskInput] = useState('');

	const addTaskHandler = event => {
		event.preventDefault();
		props.addTask(prev => {
			const newState = [...prev, { id: Math.random(), task: taskInput }];
			console.log(newState);
			return newState;
		});
		setTaskInput('');
	};

	return (
		<Paper component="form" className={classes.root}>
			<InputBase
				value={taskInput}
				onChange={e => {
					setTaskInput(e.target.value);
				}}
				placeholder="Add Task"
				className={classes.input}
			/>
			<IconButton type="submit" onClick={e => addTaskHandler(e)}>
				<AddIcon />
			</IconButton>
		</Paper>
	);
};

export default AddTask;
