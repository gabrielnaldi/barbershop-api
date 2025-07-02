import { Treatment } from './treatment';

describe('Product entity', () => {
  it('should be able to create a Treatment with name and price', () => {
    const treatmentData = {
      name: 'Barba',
      price: 5000,
    };

    const treatment = new Treatment(treatmentData);

    expect(treatment).toBeInstanceOf(Treatment);
    expect(treatment.name).toBe(treatmentData.name);
    expect(treatment.price).toBe(treatmentData.price);
  });
});
