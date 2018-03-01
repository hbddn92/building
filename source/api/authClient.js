import { AUTH_LOGIN } from 'admin-on-rest';

export default (type, params) => {
	if (type === AUTH_LOGIN) {
		const { username, password } = params
		const request = new Request('http://localhost:3333/authenticate', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: new Headers({ 'Content-Type': 'application/json' }),
		})
		return fetch(request)
			.then(response => {
				console.log(JSON.stringify(response))
				console.log(response.status)
				if (response.status < 200 || response.status >= 300) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then(({ token }) => {
				localStorage.setItem('token', token);
			});
	}
	return Promise.resolve();
}