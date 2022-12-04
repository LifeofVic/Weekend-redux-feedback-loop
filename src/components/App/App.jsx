import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import FeelingsPage from '../FeelingsPage1/Page1';
import UnderstandingPage from '../UnderstandingPage2/Page2';
import SupportPage from '../SupportPage3/Page3';
import CommentsPage from '../CommentsPage4/Page4';
import ReviewPage from '../SubmissionPage5/ReviewPage';
import Admin from '../Admin/Admin';

export default function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='App-title'>Feedback!</h1>
				<h4>Don't forget it!</h4>
			</header>
			{/* This is what the final product should look like. */}
			<Router>
				<Route exact path='/'>
					<Home />
				</Route>
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
				<Route exact path='/review'>
					<ReviewPage />
				</Route>
				<Route exact path='/admin'>
					<Admin />
				</Route>
			</Router>
		</div>
	);
}
