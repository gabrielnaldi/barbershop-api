interface BarberProps {
  name: string;
}

class Barber {
  constructor(private props: BarberProps) {}
}

describe('Barber entity', () => {
  it('should make sure a barber has name ', () => {
    const barberData: BarberProps = {
      name: 'Augusto',
    };

    const barber = new Barber(barberData);

    expect(barber).toBeInstanceOf(Barber);
  });
});
