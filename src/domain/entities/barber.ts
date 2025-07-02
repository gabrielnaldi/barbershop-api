import { BarberProps } from '../contracts/barber';

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
}
