import httpCommon from '../http-common';

export async function queryUsers(params: QueryParam): Promise<any> {
  return httpCommon({
    url: '/queryUsers',
    method: 'post',
    data: params,
  });
};
