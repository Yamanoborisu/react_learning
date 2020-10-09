import React from 'react'

const InputForm = (props) => {
	return (
		<div>
			<input type="text" className='Input' placeholder={props.default} onChange={props.changed} />
		</div>
	)
}

export default InputForm;