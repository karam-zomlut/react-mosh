import { apiClient } from './api-client';

interface User {
  id: number;
  name: string;
}

class UserServices {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get<User[]>('/users', {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  addUser(user: User) {
    return apiClient.post('/users', user);
  }

  updateUser(user: User) {
    return apiClient.put(`/users/${user.id}`, user);
  }

  deleteUser(user: User) {
    return apiClient.delete(`/users/${user.id}`);
  }
  
}

const userServices = new UserServices();
export {
  userServices
};
export type { User };
