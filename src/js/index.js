import * as THREE from 'three';
import { scene, camera, controls, renderer } from './setup';

import '../css/main.css';

initialize();

function initialize() {
  controls.addEventListener( 'change', render );
  render();
}

function render() {
    renderer.render( scene, camera );
}