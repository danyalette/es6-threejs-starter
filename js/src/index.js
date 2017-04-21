import * as THREE from 'three';
import { scene, camera, controls, renderer } from './setup';

initialize();

function initialize() {
  controls.addEventListener( 'change', render );
  render();
}

function render() {
    renderer.render( scene, camera );
}