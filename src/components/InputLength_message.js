import React from 'react'

const InputLength_message = (props) => {
	return (
		<div>
			<p className='interactiveLengthOutput'>Inputed text length is {props.length} symbols</p>
		</div>
	)
}

export default InputLength_message;