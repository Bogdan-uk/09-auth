import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { User } from '@/types/User';

interface AuthStore {
  isAuthenticated: boolean;
  user: User | null;
  setUser: (user: User) => void;
  clearIsAuthenticated: () => void;
  hasHydrated: boolean;
  setHasHydrated: (hydrated: boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      isAuthenticated: false,
      user: null,
      hasHydrated: false,
      setUser: user => set({ user, isAuthenticated: true }),
      clearIsAuthenticated: () => set({ user: null, isAuthenticated: false }),
      setHasHydrated: hydrated => set({ hasHydrated: hydrated }),
    }),
    {
      name: 'auth-storage',

      onRehydrateStorage: () => state => {
        state?.setHasHydrated(true);
      },
    }
  )
);
