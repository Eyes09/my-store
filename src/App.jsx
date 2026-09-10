import { useState, useEffect } from 'react';
import UserCard from './UserCard';

export default function App() {
  // Task 1: Setup State
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Task 2: Fetch Data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array

  // Task 3: Map UI (Handling loading and error states first)
  if (loading) return <div style={{ padding: '2rem' }}>Loading users...</div>;
  if (error) return <div style={{ padding: '2rem', color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>User Directory</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Task 3 & 4: Map users to UserCard and provide unique 'key' to prevent console warnings */}
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}