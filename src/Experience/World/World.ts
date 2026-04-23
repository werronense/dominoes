import Experience from "../Experience.ts";
import Floor from "./Floor.ts";
import Domino from "./Domino.ts";

export default class World {
  experience = new Experience();
  time = this.experience.time;
  physics = this.experience.physics;
  floor: Floor;
  domino: Domino;

  constructor() {
    this.physics.gravity.set(0, -9.82, 0);

    this.floor = new Floor();
    this.domino = new Domino();
  }

  update() {
    this.physics.step(1 / 60, this.time.delta, 3);

    this.domino.update();
  }
}
