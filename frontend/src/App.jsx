// External dependencies
import { useState } from 'react';

// Internal dependencies
import reactLogo from './assets/react.svg';
import './App.css';
import CookieConsent from './components/CookieConsent/CookieConsent.jsx';
import Card from './components/Card';

function App() {
	const [count, setCount] = useState(0);
	const [posts, setPosts] = useState([
		{
			_id: 'de78f925-9434-49b9-b36e-ef97b1310188',
			content: 'Other disorders of ear and mastoid process following mastoidectomy',
			createdAt: '2022-11-01T13:08:13Z'
		},
		{
			_id: '6ec76a77-52f4-4985-a0a1-38406a111edf',
			content: 'Malignant neoplasm of anterior two-thirds of tongue, part unspecified',
			createdAt: '2022-02-22T11:07:42Z'
		},
		{
			_id: 'efa51c4d-78e6-43a4-afbc-e20fb331d78f',
			content: 'Complete traumatic amputation of left ear',
			createdAt: '2021-09-27T12:24:53Z'
		},
		{
			_id: '0d89b007-6523-4a50-bece-2d0914d9b610',
			content: 'Other mechanical complication of cardiac pulse generator (battery)',
			createdAt: '2021-10-09T22:54:46Z'
		},
		{
			_id: 'fd8bfb32-f009-487d-b853-c490bd20edd1',
			content: 'Other injury of intrinsic muscle, fascia and tendon of left ring finger at wrist and hand level, sequela',
			createdAt: '2022-02-28T14:04:06Z'
		},
		{
			_id: '32a0cbef-404b-488e-a79b-b3d28a687331',
			content: 'Other anterior subluxation of right hip, sequela',
			createdAt: '2021-08-30T23:28:46Z'
		},
		{
			_id: 'c0d2c110-0444-43ec-9468-829bb224b28d',
			content: 'Corrosion of unspecified degree of left forearm, initial encounter',
			createdAt: '2021-09-09T16:54:28Z'
		},
		{
			_id: 'a4cbb054-3944-46bd-86a3-c03b0812db72',
			content: 'Displaced transverse fracture of shaft of right radius',
			createdAt: '2021-12-24T07:10:29Z'
		},
		{
			_id: 'a85ea08b-802a-40e2-b0c8-0a13a7e83b5a',
			content: 'Wear of articular bearing surface of internal prosthetic left knee joint, subsequent encounter',
			createdAt: '2021-11-06T15:06:17Z'
		},
		{
			_id: '20029719-a6ec-4400-b6b9-be70662f9c62',
			content: 'Strain of extensor muscle, fascia and tendon of left thumb at wrist and hand level, initial encounter',
			createdAt: '2022-03-12T06:39:55Z'
		},
		{
			_id: '7908dfca-17a8-405e-8660-97741146d163',
			content: 'Autonomic neuropathy in diseases classified elsewhere',
			createdAt: '2022-07-18T16:44:17Z'
		},
		{
			_id: '8155e9d7-ef94-4463-aabb-af303c564737',
			content: 'Aggressive periodontitis, unspecified',
			createdAt: '2022-06-19T02:52:30Z'
		},
		{
			_id: '4e2d4e46-2607-4d0a-a291-a96114a8d774',
			content: 'Unspecified nondisplaced fracture of sixth cervical vertebra, initial encounter for closed fracture',
			createdAt: '2022-07-29T00:46:55Z'
		},
		{
			_id: '7db1653b-9cd9-431f-8483-270a022f730c',
			content: 'Papyraceous fetus, third trimester, other fetus',
			createdAt: '2022-01-27T12:09:49Z'
		},
		{
			_id: '3a9f8f26-671b-494d-a15d-1d3f784a3460',
			content: 'Corrosion of second degree of right upper arm, sequela',
			createdAt: '2022-02-28T23:48:47Z'
		}
	]);

	return (
		<main>
			<CookieConsent />
			<div>
				<p className='inputTitle'>Express your thoughts:</p>
				<div className='inputWrapper'>
					<input type='text' placeholder='Write your thoughts here...' className='input' />
					<button className='inputButton'>Send</button>
				</div>
			</div>

			<div className='cards'>
				{posts.map((post) => {
					return <Card content={post.content} createdAt={post.createdAt} />;
				})}
			</div>
		</main>
	);
}

export default App;
