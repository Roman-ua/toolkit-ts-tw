export interface IUser {
  id: number;
  name: string;
  email: string;
}
export interface IUsersSlice {
  users: {
    entities: {
      [key: string]: IUser;
    },
    ids: number[],
    loading: boolean;
    removePending: boolean,
    createPending: boolean,
  };
}
