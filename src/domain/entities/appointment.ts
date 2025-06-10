interface AppointmentProps {
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  constructor(private props: AppointmentProps) {}

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }
}
