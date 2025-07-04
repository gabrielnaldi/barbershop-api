export class Treatment {
  constructor(
    private props: { name: string; price: number; barbersIds: string[] },
  ) {}

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
}
