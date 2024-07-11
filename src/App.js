// import React from 'react';
// import './App.css';
// import { selectUser } from './features/userSlice';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Feed from './Feed';
// import { useSelector } from 'react-redux';
// import Login from './Login';


// function App() {
//   const user = useSelector(selectUser)
//   return (
//     <div className="App">
//       <Header />
//       {!user ?(
//         <Login/>
//       ) : (
//       <div className="app__body">
//         <Sidebar />
//         <Feed />
//         {/*Widgets*/}
//       </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { auth } from './Firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // User is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // User is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
