import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { createContext, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import auth from "../config/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // SignIn with Google
  const googleSignIn = (auth, googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // SignUp with Email and Password
  const signUpUser = (auth, email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn with Email and Password
  const signInUser = (auth, email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Update User
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Reset Password
  const resetPassword = (auth) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // SignOut User
  const signOutUser = (auth) => {
    setLoading(true);
    return signOut(auth);
  };

  // Authentication Tools
  const authTools = {
    user,
    loading,
    googleSignIn,
    signUpUser,
    signInUser,
    updateUserProfile,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authTools}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
