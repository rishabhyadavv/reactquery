// src/hooks/usePosts.ts
import { useQuery } from '@tanstack/react-query';
import { postService } from '../api/PostService';
import { Post } from '../types/Post';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
const queryKey: [string] = ['post'];

export const usePosts = () => {
  return useQuery<Post[], Error>(
    queryKey, // Query key
    () => postService.getPosts().then(res => res.data), // Query function
   
  );

};

