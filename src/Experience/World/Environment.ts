import * as THREE from "three";
import type GUI from "lil-gui";
import Experience from "../Experience";

export default class Environment {
  experience = new Experience();
  scene = this.experience.scene;
  debug = this.experience.debug;
  debugFolder?: GUI;
  ambientLight: THREE.AmbientLight;
  directionalLight: THREE.DirectionalLight;

  constructor() {
    if (this.debug.active) {
      this.debugFolder = this.debug.ui?.addFolder("Lighting");
    }

    // Setup directional light
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 4);

    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.set(2048, 2048);

    this.directionalLight.shadow.camera.top = 50;
    this.directionalLight.shadow.camera.right = 50;
    this.directionalLight.shadow.camera.bottom = -50;
    this.directionalLight.shadow.camera.left = -50;
    this.directionalLight.shadow.camera.near = -50;
    this.directionalLight.shadow.camera.far = 50;

    this.directionalLight.shadow.bias = 0;
    this.directionalLight.shadow.normalBias = 0;

    this.directionalLight.position.set(3, 3, 1.5);

    this.scene.add(this.directionalLight);
    // this.scene.add(new THREE.CameraHelper(this.directionalLight.shadow.camera));

    if (this.debugFolder) {
      this.debugFolder
        .add(this.directionalLight.position, "x")
        .name("directionalLightX")
        .min(-100)
        .max(100)
        .step(0.001);

      this.debugFolder
        .add(this.directionalLight.position, "y")
        .name("directionalLightY")
        .min(0)
        .max(50)
        .step(0.001);

      this.debugFolder
        .add(this.directionalLight.position, "z")
        .name("directionalLightZ")
        .min(-100)
        .max(100)
        .step(0.001);

      this.debugFolder
        .add(this.directionalLight.shadow, "bias")
        .name("shadowBias")
        .min(-1)
        .max(1)
        .step(0.0001);

      this.debugFolder
        .add(this.directionalLight.shadow, "normalBias")
        .name("shadowNormalBias")
        .min(-1)
        .max(1)
        .step(0.0001);
    }

    // Setup ambient light
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(this.ambientLight);
  }
}
