abstract class Shape {
  private x: number;
  private y: number;
  private color: string;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getColor(): string {
    return this.color;
  }

  abstract clone(): Shape 
}

class Rectangle extends Shape {
  constructor(x: number, y: number, color: string) {
    super(x, y, color)
  }

  clone(): Shape {
    return new Rectangle(this.getX(), this.getY(), this.getColor());
  }
}

class Main {
  constructor() {
    const shape1 = new Rectangle(5, 5, 'Red');
    const shape2 = new Rectangle(5, 5, 'Red');
    console.log(shape1 === shape2);
    const shape1copy = shape1.clone();
    console.log(shape1 === shape1copy);
    const shape1copy2 = shape1;
    console.log(shape1 === shape1copy2, shape1copy === shape1copy2);
  }
}

new Main();