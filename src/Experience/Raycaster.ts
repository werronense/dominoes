import * as THREE from "three";
import Experience from "./Experience";

export default class Raycaster {
  experience = new Experience();
  canvas = this.experience.canvas;
  mouse = this.experience.mouse!;
  camera = this.experience.camera!;
  instance = new THREE.Raycaster();

  constructor() {
    this.instance.setFromCamera(this.mouse.position, this.camera.instance);
  }

  update() {
    this.instance.setFromCamera(this.mouse.position, this.camera.instance);

    const domino = this.experience.world?.domino.instance;

    if (domino) {
      this.canvas.classList.remove("clickable");

      const intersects = this.instance.intersectObject(domino);

      if (intersects.length) {
        this.canvas.classList.add("clickable");
      }
    }
  }

  click() {
    const domino = this.experience.world?.domino.instance;

    if (domino) {
      const intersects = this.instance.intersectObject(domino);

      if (intersects.length) {
        const { point } = intersects[0];
        console.log(point);

        // todo: apply force to domino when clicked
      }
    }
  }
}
