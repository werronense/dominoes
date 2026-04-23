import * as THREE from "three";
import * as CANNON from "cannon-es";
import Experience from "../Experience.ts";

export default class Domino {
  experience = new Experience();
  scene = this.experience.scene;
  physics = this.experience.physics;
  width = 2;
  height = 4;
  depth = 0.5;
  geometry: THREE.BoxGeometry;
  material: THREE.MeshBasicMaterial;
  mesh: THREE.Mesh;
  shape: CANNON.Box;
  body: CANNON.Body;

  constructor() {
    // Setup object
    this.geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
    this.material = new THREE.MeshBasicMaterial();

    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.scene.add(this.mesh);

    // Setup body
    this.shape = new CANNON.Box(
      new CANNON.Vec3(this.width * 0.5, this.height * 0.5, this.depth * 0.5),
    );

    this.body = new CANNON.Body({
      mass: 1,
      position: new CANNON.Vec3(0, 0, 0),
      shape: this.shape,
    });
    this.body.position.y = this.height * 0.5;

    this.physics.addBody(this.body);
  }

  update() {
    this.mesh.position.copy(this.body.position);
    this.mesh.quaternion.copy(this.body.quaternion);
  }
}
