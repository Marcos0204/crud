import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Logueo from './components/Logueo';

import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import {app} from './firebase';
const Auth = getAuth(app);

const App= () => {
  const [ userGlobal, setUserGlobal ] = useState(false);
  onAuthStateChanged(Auth, (userAuth) =>{
    if(userAuth){
      setUserGlobal(userAuth)
      console.log(userAuth)
    } else {
      setUserGlobal(null);
    }
  } )
  return (
    <div className="App">
      {userGlobal ? <Home/> : <Logueo />}
    </div>
  );
}

export default App;
