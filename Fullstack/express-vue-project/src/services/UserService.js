import http from '../http-common.js';

class UserService {

  create(data) {
    return http.post('/user/create', data);
  }

  getAll(where) {
    return http.post('/user/getAll', where);
  }

  remove(userId) {
    return http.post('/user/remove', { userId: userId });
  }

  update(data) {
    return http.post('/user/update', data);
  }

}

export default new UserService();
