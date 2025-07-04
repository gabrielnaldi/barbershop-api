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
    this.props.specialties.push(specialty);
  }

  removeSpecialty(specialty: string) {
    this.props.specialties = this.props.specialties.filter(
      s => s !== specialty,
    );
  }

  addWeekday(weekday: Weekday) {
    this.props.weekdays.push(weekday);
  }
}
