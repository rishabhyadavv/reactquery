// src/hooks/useUsers.ts
import { useQuery } from '@tanstack/react-query';
import { userService } from '../api/UserService';
import { User } from '../types/User';

export const useUsers = () => {
  return useQuery<User[], Error>(['users'], () => userService.getUsers().then(res => res.data));
};
