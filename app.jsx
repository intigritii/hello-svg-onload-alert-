import React from 'react';

function UserProfile() {
  const [name, setName] = React.useState('');
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <input placeholder="Enter name" onChange={e => setName(e.target.value)} />
      <div dangerouslySetInnerHTML={{__html: name}} />
      <button onClick={() => window.location.href = '/delete-account'}>Delete Account</button>
    </div>
  );
}

export default UserProfile;
