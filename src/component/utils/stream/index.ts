import { Transform } from "stream";

class JSONTransformStream extends Transform {
  constructor() {
    super({ objectMode: true });
  }

  _transform(chunk: Buffer, encoding: string, callback: Function) {
    try {
      const data = JSON.parse(chunk.toString());
      this.push(data);
      callback();
    } catch (error) {
      callback(error);
    }
  }
}

export {JSONTransformStream};