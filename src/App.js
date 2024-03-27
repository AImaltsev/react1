import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [likes, setLikes] = useState(0);



  return (
    <div className='App'>
      <Counter />
    </div>
  );
}

export default App;
