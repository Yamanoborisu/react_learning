import React from 'react';
import '../App.css';

const InputLength_message = (props) => {

	const COUNT = props.length;
	if (COUNT) {
		return (
			<div>
				<p className='interactiveLengthOutput'>Inputed text length is {props.length} symbols</p>
			</div>
		)
	}
	return null;

}

export default InputLength_message;