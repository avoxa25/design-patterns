interface IMessage {
  text: string,
  showMessage(): void,
  getMessage(): string
}

class Message implements IMessage {
  public text: string;

  constructor(text: string) {
    this.text = text;
  }

  showMessage(): void {
    console.log(this.text);
  }

  getMessage(): string {
    return this.text;
  }
}

class EncryptMessageDecorator implements IMessage {
  public text: string;

  constructor(message: IMessage) {
    this.text = this.encryptMessage(message.getMessage());
  }

   showMessage(): void {
     console.log(this.text);
   }

   getMessage(): string {
    return this.text;
   }

   encryptMessage(text: string) {
     return '12346y7ysfshdfnq123asd';
   }
}

class Main {
  constructor() {
    let message = new Message('Hello world!');
    message.showMessage();
    message = new EncryptMessageDecorator(message);
    message.showMessage();
  }
}

new Main();