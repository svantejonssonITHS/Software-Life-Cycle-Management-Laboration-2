// External dependencies
import { useState, useEffect } from 'react';

// Internal dependencies
import refreshIcon from './assets/refresh.svg';
import './App.css';
import CookieConsent from './components/CookieConsent/CookieConsent.jsx';
import Card from './components/Card';

function App() {
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState('');

	useEffect(getPosts, []);

	const BACKEND_URL = import.meta.env.VITE_URL_BACKEND || 'http://localhost:3000';

	/**
	 * Fetches posts from the backend
	 */
	function getPosts() {
		fetch(BACKEND_URL)
			.then((Response) => Response.json())
			.then((data) => {
				setPosts(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	/**
	 * Handles the input submit
	 */
	function handleSubmit() {
		fetch(BACKEND_URL, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ content: input })
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data.message);
				getPosts();
				setInput('');
			});
	}

	return (
		<main>
			<CookieConsent />
			<div className='topBar'>
				<div>
					<p className='inputTitle'>Express your thoughts:</p>
					<div className='inputWrapper'>
						<input type='text' placeholder='Write your thoughts here...' className='input' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key == 'Enter' && handleSubmit()} maxLength='35' />
						<button className='inputButton' onClick={handleSubmit} disabled={input.length === 0}>
							Send
						</button>
					</div>
				</div>

				<div>
					<button className='refreshButton' onClick={getPosts}>
						<img src={refreshIcon} alt='Refresh icon' />
						Refresh
					</button>
				</div>
			</div>
			<div className='cards'>
				{posts.map((post) => {
					return <Card key={post._id} content={post.content} createdAt={post.createdAt} />;
				})}
			</div>
		</main>
	);
}

export default App;
