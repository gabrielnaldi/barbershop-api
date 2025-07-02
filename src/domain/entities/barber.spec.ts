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

  it('should be able to add a specialties to barbers', () => {
    const barberData: BarberProps = {
      name: 'Augusto',
      specialties: ['cabelo', 'barba'],
      weekdays: [],
    };

    const barber = new Barber(barberData);

    expect(barber).toBeInstanceOf(Barber);
    expect(barber.name).toBe(barberData.name);
    expect(barber.specialties).toEqual(barberData.specialties);
  });

  it('should be able to set weekdays that barbers work', () => {
    const barberData: BarberProps = {
      name: 'Augusto',
      specialties: [],
      weekdays: ['MONDAY'],
    };

    const barber = new Barber(barberData);

    expect(barber.weekdays).toEqual(barberData.weekdays);
  });
});
