import { useHistory } from 'react-router-dom';

export default function Home() {
	/**

This will be the start of the app where the user has to click on the 'START' button to go to the first view of the feedback form.

*/
	const history = useHistory();
	const handleSubmit = () => {
		console.log('In the home page');
		history.push('/page1');
	};

	return (
		<div className='home-page'>
			<h2> Start Survey 📚 </h2>
			<button type='submit' onClick={handleSubmit}>
				START
			</button>
		</div>
	);
}
