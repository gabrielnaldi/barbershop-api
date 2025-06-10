import { Appointment } from './appointment';

describe('Appointments', () => {
  it('should make an appointment', () => {
    const appointment = new Appointment();

    expect(appointment).toBeTruthy();
  });
});
