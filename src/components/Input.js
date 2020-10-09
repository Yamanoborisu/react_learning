

import React from 'react'

const Input = (props) => {
	return (
		<div id="firstDiv">
			<input type="text" className='Input' placeholder={props.default} onChange={props.changed} />
			<p className='interactiveLengthOutput'>Inputed text length is {props.length} symbols</p>
		</div>
	)
}

export default Input;