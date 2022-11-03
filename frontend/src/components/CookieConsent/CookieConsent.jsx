import './CookieConsent.css';

function CookieConsent({ onConsent, onDissent }) {
	return (
		<div>
			<button onClick={onConsent}>Consent</button>
			<button onClick={onDissent}>Dissent</button>
		</div>
	);
}

export default CookieConsent;
