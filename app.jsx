import React from 'react';

function App() {
  const [userInput, setUserInput] = React.useState('');
  return (
    <div>
      <input onChange={e => setUserInput(e.target.value)} />
      <div dangerouslySetInnerHTML={{__html: userInput}} />
    </div>
  );
}
