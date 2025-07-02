class Barber {}

describe('Barber entity', () => {
  it('should be able to create a barber', () => {
    const barber = new Barber();

    expect(barber).toBeInstanceOf(Barber);
  });
});
