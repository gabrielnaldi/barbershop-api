import { BarberProps } from '../contracts/barber';
import { Barber } from './barber';

describe('Barber entity', () => {
  it('should make sure a barber has name', () => {
    const barberData: BarberProps = {
      name: 'Augusto',
      specialties: [],
    };

    const barber = new Barber(barberData);

    expect(barber).toBeInstanceOf(Barber);
    expect(barber.name).toBe(barberData.name);
  });

  it('should be able to add a specialties to barbers', () => {
    const barberData: BarberProps = {
      name: 'Augusto',
      specialties: ['cabelo', 'barba'],
    };

    const barber = new Barber(barberData);

    expect(barber).toBeInstanceOf(Barber);
    expect(barber.name).toBe(barberData.name);
    expect(barber.specialties).toEqual(barberData.specialties);
  });
});
