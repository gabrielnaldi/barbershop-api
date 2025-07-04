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

  it('should be able to add a specialty to a barber', () => {
    const barber = new Barber({
      name: 'Augusto',
      specialties: [],
      weekdays: [],
    });

    const specialty = 'Corte de cabelo';

    barber.addSpecialty(specialty);

    expect(barber.specialties).toEqual([specialty]);
  });

  it('should not be able to add the same specialty twice', () => {
    const specialty = 'Corte de cabelo';
    const barber = new Barber({
      name: 'Augusto',
      specialties: [specialty],
      weekdays: [],
    });

    expect(() => barber.addSpecialty(specialty)).toThrow(
      new Error('Specialty already added to barber'),
    );
  });

  it('should be able to remove a specialty from a barber', () => {
    const specialty = 'Corte de cabelo';

    const barber = new Barber({
      name: 'Augusto',
      specialties: [specialty],
      weekdays: [],
    });

    barber.removeSpecialty(specialty);

    expect(barber.specialties).toEqual([]);
  });

  it('should be able to add a weekday to a barber', () => {
    const weekday = 'MONDAY';
    const barber = new Barber({
      name: 'Augusto',
      specialties: [],
      weekdays: [],
    });

    barber.addWeekday(weekday);

    expect(barber.weekdays).toEqual([weekday]);
  });
});
