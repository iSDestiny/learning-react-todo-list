import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Checkbox, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'flex-end'
	},

	checked: {
		textDecorationLine: 'line-through'
	},

	grid: {
		color: '#5f5358'
	}
}));

const Task = props => {
	const [isChecked, setIsChecked] = useState(false);
	const classes = useStyles();

	const onCheckHandler = event => {
		setIsChecked(event.target.checked);
	};

	const onDeleteHandler = id => {
		props.setTask(prev => {
			return prev.filter(task => task.id !== id);
		});
	};

	return (
		<Grid
			container
			justify="space-between"
			alignItems="center"
			className={classes.grid}
		>
			<Grid item xs={2}>
				<Checkbox
					checked={isChecked}
					onChange={event => {
						onCheckHandler(event);
					}}
				></Checkbox>
			</Grid>
			<Grid item xs={6}>
				<Typography
					className={isChecked ? classes.checked : null}
					variant="h6"
				>
					{props.task}
				</Typography>
			</Grid>
			<Grid item xs={3} className={classes.root}>
				<IconButton
					onClick={() => {
						onDeleteHandler(props.id);
					}}
				>
					<DeleteIcon></DeleteIcon>
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default Task;
