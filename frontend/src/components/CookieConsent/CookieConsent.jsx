import { useState, useEffect } from 'react';
import LogRocket from 'logrocket';

import './CookieConsent.css';

function CookieConsent() {
	const [cookieConsent, setCookieConsent] = useState(sessionStorage.getItem('cookieConsent'));

	useEffect(() => {
		if (cookieConsent === 'true') {
			// If the user has consented, save their choice in Session Storage and initialize LogRocket monitoring
			sessionStorage.setItem('cookieConsent', true);

			LogRocket.init(import.meta.env.VITE_LOGROCKET_ID);
		} else if (cookieConsent === 'false') {
			// If the user has not consented, save their choice in Session Storage
			sessionStorage.setItem('cookieConsent', false);
		}
	}, [cookieConsent]);

	if (cookieConsent === null) {
		return (
			<div>
				<button onClick={() => setCookieConsent(true)}>CookieCookieCookie</button>
				<button onClick={() => setCookieConsent(false)}>Dissent</button>
			</div>
		);
	}
}

export default CookieConsent;
