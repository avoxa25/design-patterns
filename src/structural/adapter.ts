class Square {
  private x: number;
  private y: number;
  private squareCm: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.squareCm = x * y;
  }

  getSquareCm(): number {
    return this.squareCm;
  }
}

class Adapter {
  private service: OutsideService;

  constructor(service: OutsideService) {
    this.service = service;
  }

  private getSquareInch(square: number): number {
    return square * Math.pow(2.54, 2);
  }

  addSquareToOutsideService(square: number): void {
    this.service.addSquare(this.getSquareInch(square));
  }
}

class OutsideService {
  private squaresInInches: number[] = [];

  addSquare(square: number): void {
    this.squaresInInches.push(square);
  }

  getSquares(): number[] {
    return this.squaresInInches;
  }
}

class Main {
  constructor() {
    const square = new Square(10, 10);
    const square2 = new Square(20, 20);
    const square3 = new Square(30, 30);
    const service = new OutsideService();
    const adapter = new Adapter(service);

    adapter.addSquareToOutsideService(square.getSquareCm());
    adapter.addSquareToOutsideService(square2.getSquareCm());
    adapter.addSquareToOutsideService(square3.getSquareCm());

    console.log(service.getSquares().join(', '));
  }
}

new Main();