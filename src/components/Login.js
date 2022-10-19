import { useState } from "react";
import firebaseApp from "../firebase/firebase";
import { getFirestore, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  const registerUser = async(email, password, role) => {
    console.log("registerUser", email, password, role);
    const result = await createUserWithEmailAndPassword(
      auth, 
      email, 
      password
    ).then((userCredentials) => {
      console.log("userCredentials", userCredentials);
      return userCredentials;
    });
    console.log("result", result);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit")
    const email = e.preventDefault.email.value;
    const password = e.preventDefault.password.value;
    const role = e.preventDefault.role.value;
    console.log("email, password, role", email, password, role);

    if(isRegistered) {
      //register
      registerUser(email, password, role);
    } else {
      //login
      signInWithEmailAndPassword(auth, email, password);
    }

  };

  return (
    <div>
      <h1>Login Page</h1>
      <h2>{isRegistered ? "Registrate" : "Inicia sesion"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" placeholder="Email" id="email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Password" id="password" />
        </label>
        <label>
          Role:
          <select id="role">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
        <button onClick={ () =>   } type="submit">{isRegistered ? "Registrarme" : "Inicia sesion"}</button>
      </form>
    </div>
  );
};

export default Login;
