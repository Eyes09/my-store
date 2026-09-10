export default function UserCard({ user }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px', width: '250px' }}>
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
}