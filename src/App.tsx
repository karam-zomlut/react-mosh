import { useEffect, useState } from 'react';
import { CanceledError, User, userServices } from './services';


function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = userServices.getAll<User>();
      request.then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      id: Date.now(),
      name: 'New User',
    };

    setUsers([newUser, ...users]);

    userServices.create(newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + ' updated' };

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userServices.update(updatedUser)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userServices.delete(user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  // if (error) {
  //   return (
  //     <div className='alert alert-danger' role='alert'>
  //       {error}
  //     </div>
  //   );
  // }

  return (
    <>
      {error && (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      )}
      {isLoading && <div className='spinner-border'></div>}
      <button className='btn btn-primary mb-3' onClick={addUser}>
        Add
      </button>
      <ul className='list-group'>
        {users?.map((user) => (
          <li
            key={user.id}
            className='list-group-item d-flex justify-content-between'
          >
            {user.name}
            <div>
              <button
                className='btn btn-outline-secondary mx-1'
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className='btn btn-outline-danger'
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
