// External dependencies
import { useState, useEffect } from 'react';
import LogRocket from 'logrocket';

// Internal dependencies
import reactLogo from './assets/react.svg';
import './App.css';
import CookieConsent from './components/CookieConsent/CookieConsent.jsx';

function App() {
	const [count, setCount] = useState(0);
	const [cookieConsent, setCookieConsent] = useState(null);

	useEffect(() => {
		// If the user has not made a choice yet, do nothing
		if (cookieConsent === null) return;

		if (cookieConsent) {
			// If the user has consented, initialize LogRocket and save their choice in Session Storage
			LogRocket.init(import.meta.env.VITE_LOGROCKET_ID);

			sessionStorage.setItem('cookieConsent', true);
		} else {
			// If the user has not consented, save their choice in Session Storage
			sessionStorage.setItem('cookieConsent', false);
		}
	}, [cookieConsent]);

	return (
		<div className="App">
			<CookieConsent onConsent={() => setCookieConsent(true)} onDissent={() => setCookieConsent(false)} />
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</div>
	);
}

export default App;
