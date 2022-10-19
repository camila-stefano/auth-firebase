import firebaseApp from "../firebase/firebase"
import { getAuth, signOut } from "firebase/auth";

const Home = () => {

  const auth = getAuth(firebaseApp)

  return(
    <div>
      <h1>Home</h1>
      <button onClick={() => }>Log Out</button>
    </div>
  )
}
export default Home;