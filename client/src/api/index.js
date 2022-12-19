import axios from 'axios'

const API = axios.create({ baseURL: 'https://stack-overflow-copy.onrender.com'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

// auth
export const login = (authData) => API.post('/user/login', authData);
export const signup = (authData) => API.post('/user/signup', authData);

// questions
export const postquestion = (questionData) => API.post('/questions/ask', questionData)
export const getallquestions = () => API.get('/questions/get');
export const deletequestion = (id) => API.delete(`/questions/delete/${id}`)
export const votequestion = (id, value ) => API.patch(`/questions/vote/${id}`, { value })

// answers
export const postanswer = (id, noOfAnswers, answerBody, userAnswered ) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered })
export const deleteanswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers})

// users
export const getallusers = () => API.get('/user/getallusers');
export const updateprofile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)
export const makefriends = (id, value, token ) => API.patch(`/user/add/${id}`, { value , token})

//posts
export const postimage = (postData) => API.post('/posts/image', postData)
export const postvideo = (postData) => API.post('/posts/video', postData)
export const getallposts = () => API.get('/posts/get')
export const likepost = (postId, userId) => API.patch(`/posts/like/${postId}`, { userId })
export const deletepost = (id) => API.delete(`/posts/delete/${id}`)
