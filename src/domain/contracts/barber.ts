import { Weekday } from './weekday';

export interface BarberProps {
  name: string;
  specialties: Array<string>;
  weekdays: Array<Weekday>;
}
