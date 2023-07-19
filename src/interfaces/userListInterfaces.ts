export interface IUser {
  id: number;
  name: string;
  email: string;
}
export interface IUsersSlice {
  users: IUser[];
  loading: boolean;
}
