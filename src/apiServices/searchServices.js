import * as request from '~/utils/request';

// ta tạo biến search bằng async và truyền vào nó 2 tham số 
// q là nội dung tìm kiếm , và type mặc định ta để là "less" 
// ta tạo biết res cho nó bằng await ta cho request .get 
// obj thứ 2 có params {q, type} 
// rồi trả về res.data

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
