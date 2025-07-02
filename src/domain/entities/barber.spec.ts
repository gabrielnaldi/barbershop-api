interface BarberProps {
  name: string;
  specialties: Array<string>;
}

class Barber {
  constructor(private props: BarberProps) {}

  get name() {
    return this.props.name;
  }

  get specialties() {
    return this.props.specialties;
  }
}

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
