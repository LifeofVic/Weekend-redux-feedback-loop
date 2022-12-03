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
}
