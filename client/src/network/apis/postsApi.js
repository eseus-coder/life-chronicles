import axiosInstance from '../interceptors';

const apiFetchPosts = async(payload) => {
    let url = 'posts/getPosts'
    return await axiosInstance.get(url, { params: payload})
};

export default {
    apiFetchPosts,
};