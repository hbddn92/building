import React from 'react';
import alarm from 'material-ui/svg-icons/action/alarm';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import Menu from './Menu';

import { Calendar }  from './Calendar';
// import Dashboard	 from './Dashboard';
// import NotFound		 from './NotFound.jsx';
// import Menu			 from './Menu.jsx';
import authClient	 from '../api/authClient';
const App = () => (
	<Admin authClient={authClient} title="Building" restClient={jsonServerRestClient('http://localhost:3333')}>
		<Resource name="posts" list={Calendar} icon={alarm}/>
	</Admin>
);

export default App;