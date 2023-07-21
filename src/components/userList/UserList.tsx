import React from "react";
import UserCardItem from "./UserCardItem";
import { useSelector } from "react-redux";
import { selectAll } from "../../store/slices/users.slice";

const UserList = () => {
  const users = useSelector(selectAll);

  return (
    <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 gap-2">{
      users.map((user) => <UserCardItem key={user.id} user={user} />)
    }</div>
  )
}

export default UserList;
