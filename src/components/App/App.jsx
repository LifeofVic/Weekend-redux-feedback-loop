import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				{/* <Header /> */}
				<h1 className='App-title'>Feedback!</h1>
				<h4>Don't forget it!</h4>
			</header>
			//!This is what the final product should look like.
			{/* <Router>
				<Route exact path='/page1'>
					<FeelingsPage />
				</Route>
				<Route exact path='/page2'>
					<UnderstandingPage />
				</Route>
				<Route exact path='/page3'>
					<SupportPage />
				</Route>
				<Route exact path='/page4'>
					<CommentsPage />
				</Route>
			</Router> */}
		</div>
	);
}

export default App;
