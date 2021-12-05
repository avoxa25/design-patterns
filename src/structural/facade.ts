interface VideoFile {
  name: string,
  format: string,
  bitrate: number,
  averageDb: number
}

class AudioMixer {
  static normalize(file: VideoFile): void {
    file.averageDb /= 1.5;
  }
}

class BitrateCompressor {
  static compress(file: VideoFile): void {
    file.bitrate /= 2;
  }
}

class Formatter {
  static format(file: VideoFile, format: string): void {
    file.format = format;
  }
}

class Facade {
  static convert(file: VideoFile, format: string): void {
    AudioMixer.normalize(file);
    BitrateCompressor.compress(file);
    Formatter.format(file, format);
  }
}

class Main {
  constructor() {
    const video: VideoFile = {
      name: 'cats-in-bath',
      format: 'ogg',
      bitrate: 12000,
      averageDb: 54
    };
    Facade.convert(video, 'mp4');
    console.log(video);
  }
}

new Main();