interface Chocolate {
  name: string,
  cacao: number,
  country: string
}

class RussianChocolate implements Chocolate {
  public name: string;
  public cacao: number;
  public country: string;

  constructor() {
    this.name = 'Alenka';
    this.cacao = 90;
    this.country = 'Russia'
  }
}

class AmericanChocolate implements Chocolate {
  public name: string;
  public cacao: number;
  public country: string;

  constructor() {
    this.name = 'Alpen Gold';
    this.cacao = 80;
    this.country = 'USA'
  }
}

interface PlayStation {
  name: string,
  price: number,
  country: string
}

class RussianPlayStation implements PlayStation {
  public name: string;
  public price: number;
  public country: string;

  constructor() {
    this.name = 'Tetris';
    this.price = 10;
    this.country = 'Russia';
  }
}

class AmericanPlayStation implements PlayStation {
  public name: string;
  public price: number;
  public country: string;

  constructor() {
    this.name = 'XBOX 360';
    this.price = 300;
    this.country = 'USA';
  }
}

abstract class Creator {
  abstract createChocolate(): Chocolate;
  abstract createPlayStation(): PlayStation;
}

class RussianCreator extends Creator {
  createChocolate(): Chocolate {
    return new RussianChocolate();
  }
  createPlayStation(): PlayStation {
    return new RussianPlayStation();
  }
}

class AmericanCreator extends Creator {
  createChocolate(): Chocolate {
    return new AmericanChocolate();
  }
  createPlayStation(): PlayStation {
    return new AmericanPlayStation();
  }
}

class Main {
  constructor() {
    const random = this.randomize();
    const factory = this.chooseProduct(random);
    console.log(factory.createChocolate(), factory.createPlayStation());
  }

  private randomize(): boolean {
    return Math.round(Math.random()) ? true : false;
  }

  private chooseProduct(arg: boolean): Creator {
    return arg ? new RussianCreator() : new AmericanCreator();
  }
}

new Main();