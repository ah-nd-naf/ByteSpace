import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, googleProvider, isFirebaseConfigured } from '../lib/firebase';

const AuthContext = createContext(null);

/**
 * Maps Firebase authentication error codes to user-friendly messages.
 */
export function mapAuthError(error) {
  if (!error) return '';
  const code = (error.code || '').replace(/^auth\//, '');
  const message = error.message || '';

  if (
    !isFirebaseConfigured ||
    message.includes('Authentication is not configured') ||
    code === 'invalid-api-key' ||
    code === 'api-key-not-valid'
  ) {
    return 'Authentication is not configured';
  }

  switch (code) {
    case 'email-already-in-use':
      return 'This email is already registered. Please sign in instead.';
    case 'invalid-credential':
    case 'wrong-password':
    case 'user-not-found':
      return 'Invalid email or password. Please try again.';
    case 'weak-password':
      return 'Password should be at least 6 characters.';
    case 'invalid-email':
      return 'Please enter a valid email address.';
    case 'popup-closed-by-user':
      return 'Sign in was cancelled before completion.';
    case 'network-request-failed':
      return 'Network error. Please check your internet connection.';
    case 'too-many-requests':
      return 'Too many unsuccessful attempts. Please try again later.';
    case 'popup-blocked':
      return 'Pop-up was blocked by browser. Please allow pop-ups for this site.';
    case 'user-disabled':
      return 'This account has been disabled.';
    default:
      if (message.includes('not configured')) {
        return 'Authentication is not configured';
      }
      return message.replace(/^Firebase:\s*/, '') || 'An error occurred during authentication.';
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(() => Boolean(auth));

  useEffect(() => {
    if (!auth) {
      return;
    }

    try {
      const unsubscribe = onAuthStateChanged(
        auth,
        (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        },
        () => {
          setLoading(false);
        }
      );
      return () => unsubscribe();
    } catch {
      setLoading(false);
    }
  }, []);

  const register = async (name, email, password) => {
    if (!auth || !isFirebaseConfigured) {
      throw new Error('Authentication is not configured');
    }
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    if (name && userCredential.user) {
      await updateProfile(userCredential.user, { displayName: name });
      setUser({ ...userCredential.user, displayName: name });
    }
    return userCredential.user;
  };

  const login = async (email, password) => {
    if (!auth || !isFirebaseConfigured) {
      throw new Error('Authentication is not configured');
    }
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  };

  const loginWithGoogle = async () => {
    if (!auth || !isFirebaseConfigured) {
      throw new Error('Authentication is not configured');
    }
    const userCredential = await signInWithPopup(auth, googleProvider);
    return userCredential.user;
  };

  const logout = async () => {
    if (!auth || !isFirebaseConfigured) {
      setUser(null);
      return;
    }
    await signOut(auth);
  };

  const value = {
    user,
    loading,
    register,
    login,
    loginWithGoogle,
    logout,
    isConfigured: isFirebaseConfigured,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { useAuth } from '../hooks/useAuth';

export default AuthContext;
