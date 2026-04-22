import * as THREE from "three";
import EventEmitter from "./EventEmitter.ts";
import Experience from "../Experience.ts";

export default class Mouse extends EventEmitter {
  experience = new Experience();
  sizes = this.experience.sizes;
  position = new THREE.Vector2(-1, -1);

  constructor() {
    super();

    window.addEventListener("mousemove", (e) => {
      this.position.x = (e.clientX / this.sizes.width) * 2 - 1;
      this.position.y = -((e.clientY / this.sizes.height) * 2 - 1);
    });

    window.addEventListener("click", () => {
      this.emit("click");
    });
  }
}
