import React from 'react';
import LessThan5_message from './LessThan5_message';
import MoreThan5_message from './MoreThan5_message';

const ValidationComponent = (props) => {

	const COUNT = props.length;

	if (COUNT <= 5) {
		return (<LessThan5_message />)
	}
	return (<MoreThan5_message />)


}

export default ValidationComponent;