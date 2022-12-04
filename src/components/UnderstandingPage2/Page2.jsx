import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function UnderstandingPage() {
	/**This will return the input field that will receive the integer for the question:  //?How well are you understanding the content? 

That data will then be added to the state that was created in the index.js file.   

const Feedback = {
id: //* created.
feeling: //*number provided by [FEELINGS PAGE] 
understanding: //! INSERTED BY THIS FILE. 
support: 
comments: 
}

 */

	const userFeedback = useSelector(store => store.userFeedback);
	const [UndValue, setUndValue] = useState();
	const dispatch = useDispatch();
	const history = useHistory();

	const handleChange = event => {
		setUndValue(Number(event.target.value));
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log('This is what event is: ', e);
		dispatch({
			type: 'SET_UNDERSTANDING',
			payload: UndValue,
		});
		history.push('/page3');
	};

	return (
		<div className='feelings-container'>
			<h4>{JSON.stringify(userFeedback)}</h4>
			<form id='feelings-section' onSubmit={handleSubmit}>
				<h2> How well are you understanding the content? </h2>
				<input type='number' required onChange={handleChange} />
				<button type='submit'> test</button>
			</form>
		</div>
	);
}
