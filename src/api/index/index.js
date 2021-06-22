
import http from '@/api/axios';

export default class  Public {
    getList(params) {
        return http.get('/v1/common/index', params, 'json')
    }

}

