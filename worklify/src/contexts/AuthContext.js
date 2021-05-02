import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const signup = (name, email, password) => {
    return auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      cred.user.updateProfile({
        displayName: name,
      });
    });
  };
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
