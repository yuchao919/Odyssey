declare interface UserInfo {
  id: number;
  name: string;
  age: number;
  email: string;
}


declare interface QueryParam {
  currentPage: number;
  pageSize: number;
  searchKey: string;
}
