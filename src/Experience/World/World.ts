import Experience from "../Experience.ts";
import Domino from "./Domino.ts";

export default class World {
  experience = new Experience();
  time = this.experience.time;
  physics = this.experience.physics;
  domino: Domino;

  constructor() {
    this.physics.gravity.set(0, -9.82, 0);

    this.domino = new Domino();
  }

  update() {
    this.physics.step(1 / 60, this.time.delta, 3);

    this.domino.update();
  }
}
