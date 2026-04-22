import * as THREE from "three";
import Experience from "../Experience.ts";

export default class Domino {
  experience = new Experience();
  scene = this.experience.scene;
  geometry: THREE.BoxGeometry;
  material: THREE.MeshBasicMaterial;
  instance: THREE.Mesh;

  constructor() {
    this.geometry = new THREE.BoxGeometry(2, 4, 0.5);
    this.material = new THREE.MeshBasicMaterial();

    this.instance = new THREE.Mesh(this.geometry, this.material);

    this.scene.add(this.instance);
  }
}
