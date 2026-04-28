import Experience from "../Experience.ts";
import Environment from "./Environment.ts";
import Floor from "./Floor.ts";
import Dominoes from "./Dominoes.ts";

export default class World {
  experience = new Experience();
  time = this.experience.time;
  physics = this.experience.physics.world;
  environment: Environment;
  floor: Floor;
  dominoes: Dominoes;

  constructor() {
    this.environment = new Environment();
    this.floor = new Floor();
    this.dominoes = new Dominoes();
  }

  update() {
    this.physics.step(1 / 60, this.time.delta, 3);

    this.dominoes.update();
  }
}
