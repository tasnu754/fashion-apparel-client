import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase.config";

export const AuthProvider = createContext(null);

const FirebaseAuth = ({ children }) => {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const register = (email , password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unSubscribe();
        }
    },[])

    const login = (email , password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

    const goggleLogin = () => {
        return signInWithPopup(auth, provider);
    }

    const logout = () => {
        return signOut(auth);
    }

    const ProfileUpdate = (name , photo) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo
        });
    }

    const info = {
      user,
      register,
      login,
      goggleLogin,
      logout,
      ProfileUpdate,
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
