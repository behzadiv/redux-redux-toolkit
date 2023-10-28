import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from "../features/user/userActions";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const getUsers = () => {
    dispatch(fetchUsers());
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
