interface BarberProps {
  name: string;
}

class Barber {
  constructor(private props: BarberProps) {}
}

describe('Barber entity', () => {
  it('should be able to create a barber', () => {
    const barber = new Barber();

    expect(barber).toBeInstanceOf(Barber);
  });
});
