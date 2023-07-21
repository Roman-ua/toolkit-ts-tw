import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "./sharedHooks/commonHooks";
import UserList from "./components/userList/UserList";
import Loader from "./components/shared/Loader";
import { createUser, fetchUsers } from "./store/asyncThunks/usersThunks";
import CreateNewButton from "./components/shared/CreateNewButton";
import { selectAll } from "./store/slices/users.slice";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useAppDispatch();

  const { loading, createPending} = useAppSelector((state) => state.users);
  const users = useSelector(selectAll);

  const createUserHandler = useCallback(() => {
      dispatch(createUser(users.length + 1));
  }, [dispatch, users]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="bg-cyan-950 h-screen p-3 relative">
      {loading ? <Loader /> : <UserList />}
      <CreateNewButton clickHandler={createUserHandler} disabled={createPending} />
    </div>
  )
}

export default App;
