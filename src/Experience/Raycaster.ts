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

    const dominoes = this.experience.world?.dominoes.all;

    if (dominoes) {
      this.canvas.classList.remove("clickable");

      const intersects = this.instance.intersectObjects(
        dominoes.map((domino) => domino.mesh),
      );

      if (intersects.length) {
        this.canvas.classList.add("clickable");
      }
    }
  }

  click() {
    this.instance.setFromCamera(this.mouse.position, this.camera.instance);

    const dominoes = this.experience.world?.dominoes.all;

    if (dominoes) {
      const intersects = this.instance.intersectObjects(
        dominoes.map((domino) => domino.mesh),
      );

      if (intersects.length) {
        const { uuid } = intersects[0].object;
        const { point } = intersects[0];
        const { direction } = this.instance.ray;

        const domino = dominoes.find((domino) => domino.mesh.uuid === uuid);

        domino?.click(direction, point);
      }
    }
  }
}
