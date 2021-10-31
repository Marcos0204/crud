import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Logueo from './components/Logueo';

const App= () => {
  const [ userGlobal, setUserGlobal ] = useState(false);

  return (
    <div className="App">
      {userGlobal ? <Home/> : <Logueo />}
    </div>
  );
}

export default App;
