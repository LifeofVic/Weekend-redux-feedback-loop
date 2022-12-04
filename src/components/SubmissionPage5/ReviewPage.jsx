import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function ReviewPage() {
	/** This function will read the state from all the inputs through each page from 1 to 4 and then utilize that to print to the user for final submission to admin. 

const Feedback = {
id: //* created.
feeling: //*number provided by [FEELINGS PAGE]
understanding: //*number provided by [UNDERSTANDING PAGE]
support:  //*number provided by [SUPPORT PAGE]
comments: //*string provided by [COMMENTS PAGE]
*/
	const history = useHistory();
	const dispatch = useDispatch();
	const userFeedback = useSelector(store => store.userFeedback);
	//This works, now it needs to incorporate the axios.post to send data to server and be able to display it to the admin page.
	function submitFeedback() {
		console.log('In the submitFeedback');
		axios.post('/submissions', userFeedback).then(response => {
			console.log(response);
			alert('Feedback was Submitted! 👍');
		});
		dispatch({
			type: 'CLEAR_FEEDBACK',
		});
		history.push('/');
	}

	return (
		<div>
			{/* <h3>{JSON.stringify(userFeedback)} </h3> */}
			<h2> Review Your Feedback</h2>
			<p> Feeling: {userFeedback.feeling}</p>
			<p> Understanding: {userFeedback.understanding}</p>
			<p> Support: {userFeedback.support}</p>
			<p> Comments: {userFeedback.comments}</p>
			<button className='submit-feedback-btn' onClick={submitFeedback}>
				SUBMIT
			</button>
		</div>
	);
}
