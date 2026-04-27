import Domino from "./Domino.ts";

export default class Dominoes {
  all: Domino[] = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.all.push(new Domino({ x: i, z: i }));
    }
  }

  update() {
    for (const domino of this.all) {
      domino.update();
    }
  }
}
