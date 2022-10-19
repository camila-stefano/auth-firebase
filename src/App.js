import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";

import firebaseApp from "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseApp);

const App = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFromFirebase) => {
    if (userFromFirebase) {
      setUser(userFromFirebase);
    } else {
      setUser(null);
    }
  });

  return (
    <div className="App">
      <h1>Authentication React + Firebase</h1>
      {user ? <Home /> : <Login />}
    </div>
  );
};

export default App;
