import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList }  from './Posts';
// import Dashboard	 from './Dashboard';
// import NotFound		 from './NotFound.jsx';
// import Menu			 from './Menu.jsx';
import authClient	 from '../api/authClient';
const App = () => (
	<Admin authClient={authClient} title="My Custom Admin" restClient={jsonServerRestClient('http://localhost:3333')}>
		<Resource name="posts" list={PostList} />
	</Admin>
);

export default App;