import httpCommon from '../http-common';

export async function addUser(params: UserInfo): Promise<any> {
  return httpCommon({
    url: '/users/addUser',
    method: 'post',
    data: params,
  });
};

export async function queryUsers(params: QueryParam): Promise<any> {
  return httpCommon({
    url: '/users/queryUsers',
    method: 'post',
    data: params,
  });
};

export async function updateUser(params: UserInfo): Promise<any> {
  return httpCommon({
    url: '/users/updateUser',
    method: 'post',
    data: params,
  });
};

export async function deleteUsers(params: number[]): Promise<any> {
  return httpCommon({
    url: '/users/deleteUsers',
    method: 'post',
    data: params,
  });
};
