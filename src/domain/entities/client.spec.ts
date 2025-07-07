import { Client } from './client';

describe('Client entitie', () => {
  it('should make sure client have name, phone and birth date', () => {
    const clientData = {
      name: 'Lorem ipsum',
      birthDate: new Date(),
      phone: '+5512912345678',
    };

    const client = new Client(clientData);

    expect(client).toBeInstanceOf(Client);
    expect(client.name).toBe(clientData.name);
    expect(client.birthDate).toBe(clientData.birthDate);
    expect(client.phone).toBe(clientData.phone);
    expect(client.email).toBeUndefined();
  });

  it('should be able to create clients with emails', () => {
    const clientData = {
      name: 'Lorem ipsum',
      birthDate: new Date(),
      phone: '+5512912345678',
      email: 'lorem@gmail.com',
    };

    const client = new Client(clientData);

    expect(client).toHaveProperty('props.email');
    expect(client.email).toBe(clientData.email);
  });

  it('should be able to update client information', () => {
    const previousBirthDate = new Date('2025-01-01');
    const previousName = 'Lorem ipsum';
    const previousPhone = '+5512912345678';

    const clientData = {
      name: previousName,
      birthDate: previousBirthDate,
      phone: previousPhone,
    };

    const client = new Client(clientData);

    const newBirthDate = new Date('2025-01-02');
    const newName = 'Lorem ipsum dolor sit amet';
    const newPhone = '+5512912345679';

    client.update({
      name: newName,
      birthDate: newBirthDate,
      phone: newPhone,
    });

    expect(client.name).toBe(newName);
    expect(client.birthDate).toBe(newBirthDate);
    expect(client.phone).toBe(newPhone);
  });
});
