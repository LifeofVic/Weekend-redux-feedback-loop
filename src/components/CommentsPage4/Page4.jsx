import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function CommentsPage() {
	/**This will return the input field that will receive the string for the question:  //? Any Comments you want to leave? 

That data will then be added to the state that was created in the index.js file.   

const Feedback = {
id: //* created.
feeling: //*number provided by [FEELINGS PAGE]
understanding: //*number provided by [UNDERSTANDING PAGE]
support:  //*number provided by [SUPPORT PAGE]
comments: //! INSERTED BY THIS FILE.
*/

	const userFeedback = useSelector(store => store.userFeedback);
	const [commentValue, setCommentValue] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();

	const handleChange = event => {
		setCommentValue(event.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log('This is what event is: ', e);
		dispatch({
			type: 'SET_COMMENTS',
			payload: commentValue,
		});
		history.push('/review');
	};

	return (
		<div className='feelings-container'>
			{/* <h4>{JSON.stringify(userFeedback)}</h4> */}
			<form id='feelings-section' onSubmit={handleSubmit}>
				<h2> Any Comments you want to leave? </h2>
				<input type='text' onChange={handleChange} />
				<button type='submit'> test</button>
			</form>
		</div>
	);
}
