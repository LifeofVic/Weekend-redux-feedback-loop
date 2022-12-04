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

	const handleChange = event => {
		setSupportValue(Number(event.target.value));
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log('This is what event is: ', e);
		dispatch({
			type: 'SET_SUPPORT',
			payload: supportValue,
		});
		history.push('/page4');
	};
	return (
		<div className='feelings-container'>
			<form id='feelings-section' onSubmit={handleSubmit}>
				<h2> How well are you being supported? </h2>
				<input type='number' min='1' max='5' required onChange={handleChange} />
				<button type='submit'> Next </button>
			</form>
		</div>
	);
}
