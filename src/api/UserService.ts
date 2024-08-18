// src/api/UserService.ts
import ApiClient from './ApiClient';
import { User } from '../types/User';

class UserService {
  private apiClient: ApiClient;

  constructor() {
    this.apiClient = new ApiClient('https://jsonplaceholder.typicode.com');
  }

  getUsers() {
    return this.apiClient.get<User[]>('/users');
  }
}

export const userService = new UserService();
