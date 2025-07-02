interface ClientProps {
  name: string;
  phone: string;
  email?: string;
  birthDate: Date;
}

export class Client {
  constructor(private props: ClientProps) {}

  get name() {
    return this.props.name;
  }

  get birthDate() {
    return this.props.birthDate;
  }

  get phone() {
    return this.props.phone;
  }

  get email() {
    return this.props.email;
  }
}
