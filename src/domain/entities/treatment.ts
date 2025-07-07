import { TreatmentProps } from '../contracts/treatment';

export class Treatment {
  constructor(private props: TreatmentProps) {}

  get name() {
    return this.props.name;
  }

  get price() {
    return this.props.price;
  }

  get barbersIds() {
    return this.props.barbersIds;
  }

  addBarber(barberId: string) {
    if (this.props.barbersIds.includes(barberId)) {
      throw new Error('Barber already added to treatment');
    }

    this.props.barbersIds.push(barberId);
  }

  removeBarber(barberId: string) {
    this.props.barbersIds = this.props.barbersIds.filter(id => id !== barberId);
  }
}
