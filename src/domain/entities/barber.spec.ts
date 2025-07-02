interface BarberProps {
  name: string;
  specialties: Array<string>;
}

class Barber {
  constructor(private props: BarberProps) {}

  get name() {
    return this.props.name;
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
});
