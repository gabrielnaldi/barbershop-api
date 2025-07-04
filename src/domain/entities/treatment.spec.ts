import { randomUUID } from 'crypto';
import { Treatment } from './treatment';

describe('Product entity', () => {
  it('should be able to create a Treatment with name and price', () => {
    const treatmentData = {
      name: 'Barba',
      price: 5000,
      barbersIds: [],
    };

    const treatment = new Treatment(treatmentData);

    expect(treatment).toBeInstanceOf(Treatment);
    expect(treatment.name).toBe(treatmentData.name);
    expect(treatment.price).toBe(treatmentData.price);
  });

  it('should be able to add barbers to a treatment', () => {
    const treatment = new Treatment({
      name: 'Barba',
      price: 5000,
      barbersIds: [],
    });

    const id = randomUUID();

    treatment.addBarber(id);

    expect(treatment.barbersIds).toEqual([id]);
  });

  it('should not be able to add the same barber twice', () => {
    const treatment = new Treatment({
      name: 'Barba',
      price: 5000,
      barbersIds: [],
    });

    const id = randomUUID();

    treatment.addBarber(id);

    expect(() => treatment.addBarber(id)).toThrow(
      new Error('Barber already added to treatment'),
    );
  });
});
