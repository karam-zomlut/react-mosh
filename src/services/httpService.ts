import { apiClient } from './api-client';

interface Entity {
  id: number;
}

class HttpService {
  
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  create<T>(user: T) {
    return apiClient.post(this.endpoint, user);
  }

  update<T extends Entity>(user: T) {
    return apiClient.put(`${this.endpoint}/${user.id}`, user);
  }

  delete(id: number) {
    return apiClient.delete(`${this.endpoint}/${id}`);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);
export { create };