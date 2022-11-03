import { useState, useEffect } from 'react';
import LogRocket from 'logrocket';

import './CookieConsent.css';

function CookieConsent() {
	const [cookieConsent, setCookieConsent] = useState(sessionStorage.getItem('cookieConsent'));

	useEffect(() => {
		if (cookieConsent === 'true') {
			// If the user has consented, save their choice in Session Storage and initialize LogRocket monitoring
			sessionStorage.setItem('cookieConsent', 'true');

			LogRocket.init(import.meta.env.VITE_LOGROCKET_ID);
		} else if (cookieConsent === 'false') {
			// If the user has not consented, save their choice in Session Storage
			sessionStorage.setItem('cookieConsent', 'false');
		}
	}, [cookieConsent]);

	if (cookieConsent === null) {
		return (
			<div className="cookieConsent_outer-container">
				<div className="cookieConsent_inner-container">
					<h1>We use cookies</h1>
					<p>We use cookies to improve your experience on our website. Do you consent to our use of cookies?</p>
					<div className="cookieConsent_button-container">
						<button className="consent" onClick={() => setCookieConsent('true')}>
							I accept cookies
						</button>
						<button className="decline" onClick={() => setCookieConsent('false')}>
							I decline cookies
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default CookieConsent;
