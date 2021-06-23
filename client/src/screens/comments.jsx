import React from 'react';

export default function Comments(props) {
	const { comments } = props;

	return (
		<div>
			<h3>comments</h3>
			{comments.map((comment) => (
				<p key={comment.id}>{comment.content}</p>
			))}
		</div>
	);
}