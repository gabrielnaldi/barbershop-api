export class Treatment {
  constructor(private props: { name: string }) {}

  get name() {
    return this.props.name;
  }
}
