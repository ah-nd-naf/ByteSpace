import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Read config ONLY from the six required VITE_FIREBASE_* environment variables
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Check if credentials are placeholders or unconfigured
function isPlaceholder(value) {
  if (!value || typeof value !== 'string') return true;
  const lower = value.toLowerCase().trim();
  return (
    lower.includes('your_') ||
    lower.includes('mock') ||
    lower.includes('placeholder') ||
    lower.includes('example') ||
    lower === 'your_api_key_here' ||
    lower === 'your_project_id' ||
    value === 'YOUR_API_KEY'
  );
}

const isConfigured = Boolean(
  apiKey &&
  projectId &&
  !isPlaceholder(apiKey) &&
  !isPlaceholder(projectId)
);

let app = null;
let auth = null;
const googleProvider = new GoogleAuthProvider();

// Guard against missing/placeholder credentials or initialization errors
if (isConfigured) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
  } catch {
    app = null;
    auth = null;
  }
}

const isFirebaseConfigured = Boolean(auth && isConfigured);

export { auth, googleProvider, isFirebaseConfigured, app };
export default app;
