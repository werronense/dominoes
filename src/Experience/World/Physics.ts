import * as CANNON from "cannon-es";

export default class Physics {
  world = new CANNON.World();
  materials: Record<string, CANNON.Material> = {};

  constructor() {
    this.world.gravity.set(0, -9.82, 0);
    this.world.allowSleep = true;

    // Materials
    this.materials.dominoMaterial = new CANNON.Material("dominoMaterial");
    this.materials.floorMaterial = new CANNON.Material("floorMaterial");

    this.world.addContactMaterial(
      new CANNON.ContactMaterial(
        this.materials.dominoMaterial,
        this.materials.dominoMaterial,
        {
          friction: 0.01,
          restitution: 0.01,
          contactEquationStiffness: 1e6,
        },
      ),
    );

    this.world.addContactMaterial(
      new CANNON.ContactMaterial(
        this.materials.dominoMaterial,
        this.materials.floorMaterial,
        {
          restitution: 0.01,
        },
      ),
    );
  }
}
