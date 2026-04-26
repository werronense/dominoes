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
      this.resetPosition(e.clientX, e.clientY);
    });

    window.addEventListener("click", (e) => {
      this.resetPosition(e.clientX, e.clientY);

      this.emit("click");
    });
  }

  resetPosition(x: number, y: number) {
    // Normalize the coordinates
    this.position.x = (x / this.sizes.width) * 2 - 1;
    this.position.y = -((y / this.sizes.height) * 2 - 1);
  }
}
