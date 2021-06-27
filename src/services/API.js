import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getUsers = () => {
    return axiosInstance.get(`/users`).then(res => res.data);
};

const getUser = (id) => {
    return axiosInstance.get(`/users/${ id }`).then(res => res.data);
};

const getPosts = () => {
    return axiosInstance.get(`/posts`).then(res => res.data);
};

const getComments = async () => {
    const {data} = await axiosInstance.get(`/comments`);
    return data;
}


export {getUsers, getPosts, getUser, getComments};