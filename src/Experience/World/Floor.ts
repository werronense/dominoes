import * as THREE from "three";
import * as CANNON from "cannon-es";
import Experience from "../Experience";

export default class Floor {
  experience = new Experience();
  scene = this.experience.scene;
  physics = this.experience.physics;
  geometry: THREE.PlaneGeometry;
  material: THREE.MeshBasicMaterial;
  shape: CANNON.Plane;
  mesh: THREE.Mesh;
  body: CANNON.Body;

  constructor() {
    // Setup object
    this.geometry = new THREE.PlaneGeometry(30, 30);
    this.material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = -Math.PI * 0.5;

    this.scene.add(this.mesh);

    // Setup body
    this.shape = new CANNON.Plane();

    this.body = new CANNON.Body({
      mass: 0,
      shape: this.shape,
    });
    this.body.quaternion.setFromAxisAngle(
      new CANNON.Vec3(-1, 0, 0),
      Math.PI * 0.5,
    );

    this.physics.addBody(this.body);
  }
}
