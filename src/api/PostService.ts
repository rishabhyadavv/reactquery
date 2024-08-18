// src/api/PostService.ts
import ApiClient from './ApiClient';
import { Post } from '../types/Post';

class PostService {
  private apiClient: ApiClient;

  constructor() {
    this.apiClient = new ApiClient('https://jsonplaceholder.typicode.com');
  }

  getPosts() {
    return this.apiClient.get<Post[]>('/posts');
  }
}

export const postService = new PostService();
