import { useAppDispatch } from "../app/hooks";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FireBaseAuth, FireBaseDB, userRef } from "../utils/fireBaseConfig";
import { FcGoogle } from "react-icons/fc";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { setUserStatus } from "../app/slices/AppSlice";
function Login() {
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { email, uid },
    } = await signInWithPopup(FireBaseAuth, provider);

    if (email) {
      const firestoreQuery = query(userRef, where("uid", "==", uid));
      const fetchedUser = await getDocs(firestoreQuery);
      if (fetchedUser.docs.length === 0) {
        await addDoc(collection(FireBaseDB, "users"), {
          uid,
          email,
        });
      }
      dispatch(setUserStatus({ email }));
    }
  };

  return (
    <div className="login">
      <button onClick={handleLogin} className="login-btn">
        <FcGoogle /> Login with Google
      </button>
    </div>
  );
}

export default Login;
