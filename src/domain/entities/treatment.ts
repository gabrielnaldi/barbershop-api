export class Treatment {
  constructor(private props: { name: string; price: number }) {}

  get name() {
    return this.props.name;
  }

  get price() {
    return this.props.price;
  }
}
