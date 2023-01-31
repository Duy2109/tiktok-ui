import * as httpRequest from '~/utils/httpRequest';

// ta tạo biến search bằng async và truyền vào nó 2 tham số 
// q là nội dung tìm kiếm , và type mặc định ta để là "less" 
// ta tạo biết res cho nó bằng await ta cho request .get 
// obj thứ 2 có params {q, type} 
// rồi trả về res.data

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
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
