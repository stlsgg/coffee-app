import { LOCAL_STORAGE_KEY } from "../config/constants";

// local storage utility functions
export const saveState = (state) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
};

export const loadState = () => {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error("Error loading state:", error);
    return null;
  }
};

export const clearState = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
