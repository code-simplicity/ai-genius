import { create } from 'zustand';

const useGlobalConfig = create((set) => {
  return {
    token: set,
  };
});
