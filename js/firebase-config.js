// Firebase web config for the "Saswata Foods" project.
// Replace the REPLACE_WITH_* values (Firebase console → Project settings → Your apps → Web app).
export const firebaseConfig = {
  apiKey: "REPLACE_WITH_API_KEY",
  authDomain: "REPLACE_WITH_PROJECT_ID.firebaseapp.com",
  projectId: "REPLACE_WITH_PROJECT_ID",
  storageBucket: "REPLACE_WITH_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "REPLACE_WITH_SENDER_ID",
  appId: "REPLACE_WITH_APP_ID",
};
export const ADMIN_EMAIL = "admin@saswata-admin.local";
export const isConfigured = !Object.values(firebaseConfig).some((v) => v.includes('REPLACE_WITH'));
