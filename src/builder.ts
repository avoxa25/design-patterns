class Car {
  private wheels: string;
  private doors: string;
  private roof: string;

  constructor() {
    this.wheels = 'No wheels';
    this.doors = 'No doors';
    this.roof = 'No roof';
  }

  setWheels(wheels: string): void {
    this.wheels = wheels;
  }

  getWheels(): string {
    return this.wheels;
  }

  setDoors(doors: string): void {
    this.doors = doors;
  }

  getDoors(): string {
    return this.doors;
  }

  setRoof(roof: string): void {
    this.roof = roof;
  }

  getRoof(): string {
    return this.roof;
  }
}

abstract class CarBuilder {
  abstract reset(): void
  abstract installWheels(): void
  abstract installDoors(): void
  abstract installRoof(): void
  abstract getResult(): Car
}

class SuperCarBuilder extends CarBuilder {
  private superCar: Car;

  constructor() {
    super();
    this.superCar = new Car();
  }

  reset(): void {
    this.superCar = new Car();
  }

  installWheels(): void {
    this.superCar.setWheels('Sport wheels');
  }

  installDoors(): void {
    this.superCar.setDoors('2 Sport doors');
  }

  installRoof(): void {
    this.superCar.setRoof('Sport roof');
  }

  getResult(): Car {
    return this.superCar;
  }
}

class PremiumCarBuilder extends CarBuilder {
  private premiumCar: Car;

  constructor() {
    super();
    this.premiumCar = new Car();
  }

  reset(): void {
    this.premiumCar = new Car();
  }

  installWheels(): void {
    this.premiumCar.setWheels('Premium wheels');
  }

  installDoors(): void {
    this.premiumCar.setDoors('4 Premium doors');
  }

  installRoof(): void {
    this.premiumCar.setRoof('Premium roof');
  }

  getResult(): Car {
    return this.premiumCar;
  }
}

class Director {
  private builder: CarBuilder;

  constructor() {
    this.builder = new SuperCarBuilder;
  }

  setBuilder(builder: CarBuilder): void {
    this.builder = builder;
  }

  executeBuilding(type: string): void {
    this.builder.reset()
    this.builder.installWheels();
    this.builder.installDoors();
    if (type !== 'cabriolet') this.builder.installRoof();
  }

  getResult(): Car {
    return this.builder.getResult();
  }
}

class Main {
  constructor() {
    const director = new Director();
    const cars: Car[] = [];

    director.setBuilder(new SuperCarBuilder());
    director.executeBuilding('sedan');
    cars.push(director.getResult());
    director.executeBuilding('cabriolet');
    cars.push(director.getResult());

    director.setBuilder(new PremiumCarBuilder());
    director.executeBuilding('sedan');
    cars.push(director.getResult());
    director.executeBuilding('cabriolet');
    cars.push(director.getResult());

    const string: string = cars.map((item, index) => {
      return `
      ===============
      Car #${index + 1}:
      ${item.getWheels()}
      ${item.getDoors()}
      ${item.getRoof()}
      `
    }).join('');

    console.log(`Cars: ${string}`)
  }
}

new Main();