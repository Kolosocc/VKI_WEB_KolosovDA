import type GroupInterface from './GroupInterface';

export interface StudentInterface {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  group: GroupInterface;
}
