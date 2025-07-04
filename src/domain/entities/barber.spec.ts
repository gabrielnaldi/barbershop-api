import { BarberProps } from '../contracts/barber';
import { Barber } from './barber';

describe('Barber entity', () => {
  it('should make sure a barber has name', () => {
    const barberData: BarberProps = {
      name: 'Augusto',
      specialties: [],
      weekdays: [],
    };

    const barber = new Barber(barberData);

    expect(barber).toBeInstanceOf(Barber);
    expect(barber.name).toBe(barberData.name);
  });

  it('should be able to create a barber with specialties', () => {
    const specialty = 'Corte de cabelo';

    const barberData: BarberProps = {
      name: 'Augusto',
      specialties: [specialty],
      weekdays: [],
    };

    const barber = new Barber(barberData);

    expect(barber).toBeInstanceOf(Barber);
    expect(barber.specialties).toEqual([specialty]);
  });

  it('should be able to create a barber with weekdays that he works', () => {
    const weekday = 'MONDAY';

    const barberData: BarberProps = {
      name: 'Augusto',
      specialties: [],
      weekdays: [weekday],
    };

    const barber = new Barber(barberData);

    expect(barber.weekdays).toEqual([weekday]);
  });
});
