import { createContext, useContext, useEffect } from "react";
import { auth } from "../firebase";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;
  const [cookie, setCookie, removeCookie] = useCookies([
    "user",
    "project",
    "page",
  ]);
  const userData = cookie.user;
  const nameProject = cookie.project;
  const pageLocation = cookie.page;
  const signup = (name, email, password) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        cred.user.updateProfile({
          displayName: name,
        });
      })
      .then(() => {});
  };

  const login = (email, password) => {
    setCookie("page", "login", {
      maxAge: 86400,
      path: "/",
    });
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    setCookie("page", "logout", {
      maxAge: 86400,
      path: "/",
    });

    return auth.signOut().then(() => {
      removeCookie("user", { maxAge: 86400 });
      window.location.href = "/";
    });
  };
  const setCookieName = (name) => {
    setCookie("project", name, {
      maxAge: 86400,
      path: "/",
    });
  };
  const removeCookieName = () => {
    removeCookie("project", { maxAge: 86400 });
    console.log(nameProject);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("user : ", user);
      setCookie("user", user, {
        maxAge: 86400,
        path: "/",
      });
      console.log("userData: ", userData);
    });
    return unsubscribe;
  }, [setCookie, userData]);
  return (
    <AuthContext.Provider
      value={{
        currentUser: userData,
        pageLocation,
        nameProject,
        signup,
        login,
        logout,
        setCookieName,
        removeCookieName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
