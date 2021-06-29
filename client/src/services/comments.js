import api from './api-config';

export const getAllComments = async () => {
	const resp = await api.get('/pets/comments');
	return resp.data;
};


export const postComment = async (commentData, petId) => {
	const resp = await api.post(`/pets/${petId}/comments`, { comment: commentData });
	return resp.data;
};

export const deleteComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
	return resp;
};