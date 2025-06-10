import { Appointment } from './appointment';

describe('Appointments', () => {
  it('should be able to make an appointment', () => {
    const startsAt = new Date();
    const endsAt = new Date();
    const customer = 'Lorem ipsum';
    const appointment = new Appointment({ startsAt, endsAt, customer });

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.startsAt).toBe(startsAt);
    expect(appointment.endsAt).toBe(endsAt);
    expect(appointment.customer).toBe(customer);
  });
});
