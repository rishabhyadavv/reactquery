// src/api/ApiClient.ts
import axios, { AxiosInstance } from 'axios';

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
    });
  }

  get<T>(url: string) {
    return this.client.get<T>(url);
  }
}

export default ApiClient;
