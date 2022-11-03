import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import './Card.css';

export default ({ content, createdAt }) => {
	return (
		<div className='card'>
			<p className='cardDate'>{dayjs(createdAt).fromNow()}</p>
			<p className='cardContent'>"{content}"</p>
		</div>
	);
};
