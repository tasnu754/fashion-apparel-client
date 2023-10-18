import PropTypes from "prop-types";
import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase.config";

export const AuthProvider = createContext(null);

const FirebaseAuth = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = (email , password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email , password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

    const info = {
      user,
      register,
      login,
    };

  return (
    <div>
      <AuthProvider.Provider value={info}>{children}</AuthProvider.Provider>
    </div>
  );
};

FirebaseAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FirebaseAuth;
