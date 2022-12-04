import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function SupportPage() {
	/**This will return the input field that will receive the integer for the question: //? How well are you being supported? 

That data will then be added to the state that was created in the index.js file.   

const Feedback = {
id: //* created.
feeling: //*number provided by [FEELINGS PAGE]
understanding: //*number provided by [UNDERSTANDING PAGE]
support: //! INSERTED BY THIS FILE. 
comments: //NEXT PAGE
*/

	const userFeedback = useSelector(store => store.userFeedback);
	const [supportValue, setSupportValue] = useState();
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		console.log('This is what event is: ', e);
		if (supportValue < 0) {
			dispatch({
				type: 'SET_SUPPORT',
				payload: 0,
			});
		}
		if (supportValue > 10) {
			dispatch({
				type: 'SET_SUPPORT',
				payload: 10,
			});
		}
		if (supportValue) {
			dispatch({
				type: 'SET_SUPPORT',
				payload: supportValue,
			});
		}
		if (!supportValue) {
			alert('Need to provide a input!');
		}
		history.push('/page4');
	};
	return (
		<div className='feelings-container'>
			<h4>{JSON.stringify(userFeedback)}</h4>
			<form id='feelings-section' onSubmit={handleSubmit}>
				<h2> How well are you being supported? </h2>
				<h5> 1 - Being the Lowest & 10 - being the Highest</h5>
				<input
					type='number'
					required
					onChange={e => setSupportValue(Number(...e.target.value))}
				/>
				<button type='submit'> test</button>
			</form>
		</div>
	);
}
