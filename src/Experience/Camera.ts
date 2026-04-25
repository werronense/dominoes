import * as THREE from "three";
import { OrbitControls } from "three/addons";
import Experience from "./Experience";
import type GUI from "lil-gui";

export default class Camera {
  experience: Experience = new Experience();
  debug = this.experience.debug;
  debugFolder?: GUI;
  sizes = this.experience.sizes;
  scene = this.experience.scene;
  canvas = this.experience.canvas;
  instance: THREE.PerspectiveCamera;
  controls: OrbitControls;

  constructor() {
    // Setup instance
    this.instance = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
      100,
    );
    this.instance.position.set(7, 8, 7);
    this.scene.add(this.instance);

    // Setup orbit controls
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.maxPolarAngle = Math.PI / 2 - 0.025;
    this.controls.enableDamping = true;

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui?.addFolder("camera");

      if (this.debugFolder) {
        this.debugFolder
          .add(this.instance.position, "x")
          .name("positionX")
          .min(-10)
          .max(10)
          .step(0.01);

        this.debugFolder
          .add(this.instance.position, "y")
          .name("positionY")
          .min(-10)
          .max(10)
          .step(0.01);

        this.debugFolder
          .add(this.instance.position, "z")
          .name("positionZ")
          .min(-10)
          .max(10)
          .step(0.01);
      }
    }
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}
