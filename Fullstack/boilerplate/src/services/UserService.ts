import httpCommon from '../http-common';

export async function queryUsers(params: QueryParam): Promise<any> {
  return httpCommon({
    url: '/queryUsers',
    method: 'post',
    data: params,
  });
};

export async function updateUser(params: UserInfo): Promise<any> {
  return httpCommon({
    url: '/updateUser',
    method: 'post',
    data: params,
  });
};

export async function deleteUsers(params: number[]): Promise<any> {
  return httpCommon({
    url: '/deleteUsers',
    method: 'post',
    data: params,
  });
};
