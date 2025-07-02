import { Treatment } from './treatment';

describe('Product entity', () => {
  it('should be able to create a Treatment', () => {
    const treatment = new Treatment();

    expect(treatment).toBeInstanceOf(Treatment);
  });
});
