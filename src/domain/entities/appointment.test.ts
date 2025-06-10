import { Appointment } from './appointment';

describe('Appointments', () => {
  it('should be able to make an appointment', () => {
    const startsAt = new Date();
    const endsAt = new Date();
    const appointment = new Appointment({ startsAt, endsAt });

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.startsAt).toBe(startsAt);
    expect(appointment.endsAt).toBe(endsAt);
  });
});
