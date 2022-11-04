// External dependencies
import { useState, useEffect } from 'react';

// Internal dependencies
import reactLogo from './assets/react.svg';
import './App.css';
import CookieConsent from './components/CookieConsent/CookieConsent.jsx';
import Card from './components/Card';

function App() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch(import.meta.env.VITE_URL_BACKEND)
      .then((Response) => Response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSubmit() {
    setPosts([
      ...posts,
      {
        _id: Math.random().toString(36).substr(2, 9),
        content: input,
        createdAt: new Date().toISOString()
      }
    ]);

    fetch(import.meta.env.VITE_URL_BACKEND, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: input })
    })
      .then((Response) => Response.json())
      .then((data) => console.log(data));
    setInput('');
  }

  return (
    <main>
      <CookieConsent />
      <div>
        <p className="inputTitle">Express your thoughts:</p>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Write your thoughts here..."
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key == 'Enter' && handleSubmit()}
          />
          <button
            className="inputButton"
            onClick={handleSubmit}
            disabled={input.length === 0}
          >
            Send
          </button>
        </div>
      </div>

      <div className="cards">
        {posts.map((post) => {
          return (
            <Card
              key={post._id}
              content={post.content}
              createdAt={post.createdAt}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
