import { BarberProps } from '../contracts/barber';
import { Weekday } from '../contracts/weekday';

export class Barber {
  constructor(private props: BarberProps) {}

  get name() {
    return this.props.name;
  }

  get specialties() {
    return this.props.specialties;
  }

  get weekdays() {
    return this.props.weekdays;
  }

  addSpecialty(specialty: string) {
    if (this.props.specialties.includes(specialty)) {
      throw new Error('Specialty already added to barber');
    }

    this.props.specialties.push(specialty);
  }

  removeSpecialty(specialty: string) {
    this.props.specialties = this.props.specialties.filter(
      s => s !== specialty,
    );
  }

  addWeekday(weekday: Weekday) {
    if (this.props.weekdays.includes(weekday)) {
      throw new Error('Weekday already added to barber');
    }

    this.props.weekdays.push(weekday);
  }
}
