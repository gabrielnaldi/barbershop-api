import { Treatment } from './treatment';

describe('Product entity', () => {
  it('should create a Treatment with name', () => {
    const treatmentData = {
      name: 'Barba',
    };

    const treatment = new Treatment(treatmentData);

    expect(treatment).toBeInstanceOf(Treatment);
    expect(treatment.name).toBe(treatmentData.name);
  });
});
