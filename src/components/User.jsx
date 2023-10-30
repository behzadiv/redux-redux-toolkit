import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/user/userSlice";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const getUsers = () => {
    dispatch(getAsyncUsers());
  };

  return (
    <div>
      <button onClick={() => getUsers()}>Fetch Users</button>
      <div>
        {users.loading ? (
          <p>loading...</p>
        ) : users.error ? (
          <p>{users.error}</p>
        ) : (
          <div>
            {users.data.map((item) => {
              return <h5>{item.name}</h5>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
