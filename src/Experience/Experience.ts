import * as THREE from "three";
import * as CANNON from "cannon-es";
import Sizes from "./Utils/Sizes.ts";
import Mouse from "./Utils/Mouse.ts";
import Time from "./Utils/Time.ts";
import Camera from "./Camera.ts";
import Renderer from "./Renderer.ts";
import World from "./World/World.ts";
import Raycaster from "./Raycaster.ts";

let instance: Experience | null = null;

export default class Experience {
  canvas: HTMLCanvasElement = document.querySelector("canvas.webgl")!;
  sizes: Sizes = new Sizes();
  mouse?: Mouse;
  time: Time = new Time();
  scene: THREE.Scene = new THREE.Scene();
  physics = new CANNON.World();
  camera?: Camera;
  raycaster?: Raycaster;
  renderer?: Renderer;
  world?: World;

  constructor() {
    // Singleton
    if (instance) return instance;
    instance = this;

    // Setup
    this.mouse = new Mouse();
    this.camera = new Camera();
    this.raycaster = new Raycaster();
    this.renderer = new Renderer();
    this.world = new World();

    // Sizes resize event
    this.sizes.on("resize", () => {
      this.resize();
    });

    // Time tick event
    this.time.on("tick", () => {
      this.update();
    });

    // Mouse click event
    this.mouse.on("click", () => {
      this.click();
    });
  }

  resize() {
    this.camera?.resize();
    this.renderer?.resize();
  }

  update() {
    this.camera?.update();
    this.raycaster?.update();
    this.renderer?.update();
    this.world?.update();
  }

  click() {
    this.raycaster?.click();
  }
}
