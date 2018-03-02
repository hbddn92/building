import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';
import { DateField } from 'admin-on-rest';
import CalendarComponent from 'rc-calendar';

export const Calendar = (props) => (
	<div> 
		<CalendarComponent />  
		<DateField source="publication_date" showTime />
		<span>4/23/2017, 11:05:00 PM</span>
	</div>
);