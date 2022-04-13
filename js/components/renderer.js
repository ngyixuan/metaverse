import * as THREE from "../../libs/three.js/build/three.module.js";
import { TWEEN } from "../../libs/three/examples/jsm/libs/tween.module.min.js";
class Renderer {
  constructor(sketch, settings) {
    this.sketch = sketch;
    this.settings = { ...settings };
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.sketch.sizes.width, this.sketch.sizes.height);
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMapping = THREE.ReinhardToneMapping;
    this.renderer.update = this.update.bind(this.sketch);

    return this.renderer;
  }
  update() {
    this.renderer.render(this.scene, this.activeCamera);
  }
}
export default Renderer;
