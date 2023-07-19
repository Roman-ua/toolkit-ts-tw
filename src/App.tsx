import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./sharedHooks/commonHooks";
import {fetchUsers} from "./store/slices/users.slice";

function App() {
  const dispatch = useAppDispatch();
  const { users, loading} = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="bg-cyan-950 h-screen p-3">{
      loading ? <div>Loading...</div> : <div className="grid grid-cols-4 gap-2">{
        users.map((user) => {
          return(
            <div
              key={user.id}
              className="bg-pink-500 rounded-md p-2 relative">
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div className="absolute right-0 -top-2 font-extrabold text-white rotate-45 p-2 hover:cursor-pointer">
                +
              </div>
            </div>
          )
        })
      }</div>
    }</div>
  )
}

export default App;
