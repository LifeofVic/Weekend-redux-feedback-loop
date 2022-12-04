import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';

export default function Admin() {
	/**This will provide the admin to receive the data from the server using the axios.get to see the data provided by the user after review page has been submitted.
-This will create a table and allow the admin to delete any row of the data.

 */
	const [allFeedback, getAllFeedback] = useState([]);

	useEffect(() => {
		fetchFeedback();
	}, []);

	const fetchFeedback = () => {
		axios
			.get('/')
			.then(response => {
				console.log('using axios.get to retrieve data from server', response);
				getAllFeedback(response);
			})
			.catch(error => {
				alert('There was an error in receiving data from Database.');
				console.log(
					'There was an error in receiving data from Database.',
					error
				);
			});
	};

	return (
		<div className='admin-content'>
			{/* {JSON.stringify(PizzaOrder)} */}
			<table>
				<thead>
					<tr>
						<th>Feeling</th>
						<th>Comprehension</th>
						<th>Support</th>
						<th>Comments</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{allFeedback.map(item => {
						return (
							<tr key={item.id}>
								<td>{item.feeling}</td>
								<td>{item.understanding}</td>
								<td>{item.support}</td>
								<td>{item.comments}</td>
								<button>{item.support}</button>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
