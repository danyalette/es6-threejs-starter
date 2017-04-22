import * as THREE from 'three';
import BasicThree from './basicthree';

import '../css/main.css';

initialize();

function initialize() {
  const container = document.querySelector('#container')
  const basicThree = new BasicThree(container);
  basicThree.camera.position.set(20, 70, 70);

  // add cube
  const cube = new THREE.Mesh( new THREE.CubeGeometry( 20, 20, 20 ), new THREE.MeshNormalMaterial() );
  cube.position.set(0, 0, 0);
  basicThree.scene.add(cube);
}

