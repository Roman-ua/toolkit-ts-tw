import React, {useCallback} from "react";
import { IUser } from "../../interfaces/userListInterfaces";
import CloseButton from "../shared/CloseButton";
import {removeUser} from "../../store/asyncThunks/usersThunks";
import {useAppDispatch} from "../../sharedHooks/commonHooks";

interface Props {
  user: IUser;
}
const UserCardItem = ({ user }: Props) => {
  const dispatch = useAppDispatch();

  const removeUserHandler = useCallback(() => {
    dispatch(removeUser(user.id))
  }, [dispatch, user]);

  return (
    <div className="bg-blue-500 rounded-md p-2 relative text-white">
      <div className="bg-white flex w-8 justify-center rounded-md mb-3 text-gray-800">{user.id}</div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <CloseButton clickHandler={removeUserHandler} />
    </div>
  )
}

export default UserCardItem;
