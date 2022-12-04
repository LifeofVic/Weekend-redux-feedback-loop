import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function FeelingsPage() {
	/**This will return the input field that will receive the integer for the question:  //?How are you feeling today? 

That data will then be added to the state that was created in the index.js file. 
const Feedback = {
id: //* created.
feeling://! INSERTED BY THIS FILE. 
understanding: 
support: 
comments: 
}

 */

	const userFeedback = useSelector(store => store.userFeedback);
	const [feelingValue, setFeelingValue] = useState();
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		console.log('This is what event is: ', e);
		dispatch({
			type: 'SET_FEELING',
			payload: feelingValue,
		});
		history.push('/page2');
	};

	return (
		<div className='feelings-container'>
			<h4>{JSON.stringify(userFeedback)}</h4>
			<form id='feelings-section' onSubmit={handleSubmit}>
				<h2> How are you feeling today? </h2>
				<input
					type='number'
					required
					onChange={e => setFeelingValue(Number(...e.target.value))}
				/>
				<button type='submit'> test</button>
			</form>
		</div>
	);
}
