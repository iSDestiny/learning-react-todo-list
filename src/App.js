import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
	return (
		<Container maxWidth="sm">
			<ToDoList></ToDoList>
		</Container>
	);
}

export default App;
