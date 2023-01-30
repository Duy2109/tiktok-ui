import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// async có 2 tham số là path , options 
//options cho nó là chuỗi rỗng 
// ta tao biến response = await cho cái request vừa tạo ở trên .get 
// truyền vào trong get 2 tham số là path, options 
// rồi tả về response chấm data 
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
