import { create } from 'zustand';

interface userType {
  name: string;
  email: string;
}

export const useAuthStore = create((set) => {
  return {
    isAuthenticated: false,
    loginIn: (isAuthenticated: boolean) => set({ isAuthenticated }),
    user: null,
    setUser: (user: userType) => set({ user }),
    logout: () => set({ isLoggedIn: false, user: null }),
  };
});
