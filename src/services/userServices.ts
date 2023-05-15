import { create } from './httpService';

interface User {
  id: number;
  name: string;
}

const userServices = create('/users');
export {
  userServices
};
export type { User };
