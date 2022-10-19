import { useState } from "react";
import firebaseApp from "../firebase/firebase";
import { getFirestore, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  return (
    <div>
      <h1>Login Page</h1>
      <h2>{isRegistered ? "Registrate" : "Inicia sesion"}</h2>
      <form>
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
        <button type="submit">{isRegistered ? "Registrarme" : "Inicia sesion"}</button>
      </form>
    </div>
  );
};

export default Login;
