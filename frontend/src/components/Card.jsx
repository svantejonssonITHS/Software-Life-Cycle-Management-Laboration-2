import dayjs from 'dayjs';
import { useState } from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import './Card.css';

export default ({ content, createdAt }) => {
	const colors = ['#59adf6', '#c780e8', '#9d94ff', '#08cad1', '#42d6a4', '#efe752', '#ffb480', '#ff6961'];

	const [bgColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

	return (
		<div
			className='card'
			style={{
				backgroundColor: bgColor
			}}>
			<p className='cardDate'>{dayjs(createdAt).fromNow()}</p>
			<p className='cardContent'>"{content}"</p>
		</div>
	);
};
