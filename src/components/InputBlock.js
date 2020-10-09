import React from 'react';
import InputForm from './InputForm';
import InputLength_message from './InputLength_message';

const Input = (props) => {

	const COUNT = props.length;

	if (COUNT) {
		return (
			<InputForm
				changed={props.changed}
				default={props.default}
				length={props.length}
			/>
			<InputLength_message
			/>

		)
	}
	return (
		<InputForm
			changed={props.changed}
			default={props.default}
			length={props.length}
		/>
	)



	return (
		<div id="firstDiv">

			<p className='interactiveLengthOutput'>Inputed text length is {props.length} symbols</p>
		</div>
	)
}

export default Input;