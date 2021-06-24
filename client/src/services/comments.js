import api from './api-config';

export const getAllComments = async () => {
	const resp = await api.get('/pets/comments');
	return resp.data;
};


export const postComment = async (commentData) => {
	const resp = await api.post('/pets/:pet_id/comments', { comment: commentData });
	return resp.data;
};