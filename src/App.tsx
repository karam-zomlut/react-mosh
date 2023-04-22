import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setError('');
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className='alert alert-danger' role='alert'>
        {error}
      </div>
    );
  }

  return (
    <>
      {/* {error && (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      )} */}
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
