import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete'

//POST
const postNews = (data) => Post('post/news', data);
const postUser = (data) => Post('post/user', data);

//PUT
const updateNews = (data, id) => Put(`update/${id}`, data);

// //DELETE
const deleteNews = (id) => Delete(`${id}`);
// const deleteProduct = (id) => Delete(`api/delete/${id}`);

// //GET
const getNews = () => Get('post');
const getNewsDetail = (id) => Get(`detail/${id}`);
const getUserId = () => Get('post/getId');
const getUpdate = (data, id) => Put(`update/${id}`, data);
// const getComments = () => Get('comments');

const API = {
    postNews,
    postUser,
    getNews,
    getNewsDetail,
    getUserId,
    deleteNews,
    updateNews,
    getUpdate
}

export default API;
