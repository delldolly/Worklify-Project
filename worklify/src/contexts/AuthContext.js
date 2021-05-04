import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;
  // const [currentUser, setCurrentUser] = useState(null);
  
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  const userData = cookie.user;
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
      setCookie("user",user, {
        maxAge: 86400,
        path: "/",
      })
      console.log(userData)
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser: userData, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
