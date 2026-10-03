// Firebase web config for the "Saswata Foods" project (public web config, safe to commit).
export const firebaseConfig = {
  apiKey: "AIzaSyDhhlDuNlfgN971Lkt-18dmQwcJw4I893w",
  authDomain: "saswata-foods.firebaseapp.com",
  projectId: "saswata-foods",
  storageBucket: "saswata-foods.firebasestorage.app",
  messagingSenderId: "112726993154",
  appId: "1:112726993154:web:725d80928eec32ed45ba1b",
};
export const ADMIN_EMAIL = "admin@saswata-admin.local";
export const isConfigured = !Object.values(firebaseConfig).some((v) => v.includes('REPLACE_WITH'));
