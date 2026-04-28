import Domino from "./Domino.ts";

export default class Dominoes {
  all: Domino[] = [];

  constructor() {
    const count = 70;

    for (let i = 0; i < count; i++) {
      const x = Math.random() * 0.5;
      const z = i - count * 0.5;

      this.all.push(new Domino({ x, z }));
    }
  }

  update() {
    for (const domino of this.all) {
      domino.update();
    }
  }
}
