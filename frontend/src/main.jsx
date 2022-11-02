// External dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import LogRocket from 'logrocket';

// Internal dependencies
import './index.css';
import App from './App';

// Initialize LogRocket
LogRocket.init(import.meta.env.VITE_LOGROCKET_ID);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
