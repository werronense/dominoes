import Domino from "./Domino.ts";

export default class World {
  domino: Domino;

  constructor() {
    this.domino = new Domino();
  }
}
