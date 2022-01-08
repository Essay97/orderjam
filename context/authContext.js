import { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    netlifyIdentity.on("init", (loggedUser) => {
      setUser(loggedUser);
      setAuthReady(true);
    });

    netlifyIdentity.on("login", (loggedUser) => {
      setUser(loggedUser);
      netlifyIdentity.close();
    });

    netlifyIdentity.on("logout", () => {
      setUser(null);
    });

    netlifyIdentity.init();
    netlifyIdentity.setLocale("it");

    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
      netlifyIdentity.off("init");
    };
  }, []);

  function login() {
    netlifyIdentity.open();
  }

  function logout() {
    netlifyIdentity.logout();
  }

  const context = { user, login, logout, authReady };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
