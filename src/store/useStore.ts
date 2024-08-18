// src/store/useStore.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, PersistOptions } from 'zustand/middleware';
import { User } from '../types/User';
import { Post } from '../types/Post';
import { create } from 'zustand'

interface AppState {
    users: User[];
    posts: Post[];
    addUser: (user: User) => void;
    addPost: (post: Post) => void;
    setUsers: (users: User[]) => void;
    setPosts: (posts: Post[]) => void;
  }
  
  type PersistedAppState = (
    config: (set: any, get: any, api: any) => AppState,
    options: PersistOptions<AppState>
  ) => (set: any, get: any, api: any) => AppState;
  
  const useStore = create<AppState>(
    (persist as PersistedAppState)(
      (set) => ({
        users: [],
        posts: [],
        addUser: (user: User) => set((state:any) => ({ users: [...state.users, user] })),
        addPost: (post: Post) => set((state:any) => ({ posts: [...state.posts, post] })),
        setUsers: (users: User[]) => set({ users }),
        setPosts: (posts: Post[]) => set({ posts }),
      }),
      {
        name: 'app-storage', // name of the item in storage
        getStorage: () => AsyncStorage, // use AsyncStorage
      }
    )
  );
  
  export { useStore };
