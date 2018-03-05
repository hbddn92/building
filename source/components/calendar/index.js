import React from 'react';
import { Calendar } from './Calendar';
import EventType from './EventType';

const index = (props) => (
	<div> 
		<Calendar />
		<EventType />
	</div>
);

module.exports = index