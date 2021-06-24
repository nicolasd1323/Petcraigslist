import api from './api-config';

export const getAllComments = async () => {
	const resp = await api.get('/pets/comments');
	return resp.data;
};

export const getOneComment = async (id) => {
	const resp = await api.get(`/pets/:id/comments/${id}`);
	return resp.data;
};