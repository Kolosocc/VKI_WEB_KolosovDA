import type GroupInterface from './GroupInterface';

export interface StudentInterface {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  middleName: string;
  group: GroupInterface;
}
