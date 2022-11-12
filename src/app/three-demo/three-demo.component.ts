// @ts-nocheck
import { Component, OnInit } from '@angular/core';

import * as THREE from '../../../public/three.module.js';
// import * as THREE from '../../../public/three.js';
// import * as THREE from 'three';
import Stats from '../../../public/stats.module';
import { OrbitControls } from '../../../public/OrbitControls';
import { RoomEnvironment } from '../../../public/RoomEnvironment';
import { GLTFLoader } from '../../../public/GLTFLoader';
import { DRACOLoader } from '../../../public/DRACOLoader';

@Component({
  selector: 'app-three-demo',
  templateUrl: './three-demo.component.html',
  styleUrls: ['./three-demo.component.less']
})
export class ThreeDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let mixer: any;

    const clock = new THREE.Clock();
    const container: any = document.getElementById('container');
    console.log('目标容器', container)

    const stats = new Stats();
    container.appendChild(stats.dom);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbfe3dd);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(5, 2, 8);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('../assets/gltf/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load('../assets/LittlestTokyo.glb', function (gltf: any) {

      const model = gltf.scene;
      model.position.set(1, 1, 0);
      model.scale.set(0.01, 0.01, 0.01);
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);
      mixer.clipAction(gltf.animations[0]).play();

      animate();

    }, undefined, function (e: any) {

      console.error(e);

    });


    window.onresize = function () {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

    };


    function animate() {

      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      mixer.update(delta);

      controls.update();

      stats.update();

      renderer.render(scene, camera);

    }
  }
}
