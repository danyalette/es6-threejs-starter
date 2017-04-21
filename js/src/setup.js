import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';

export let [ width, height ] = getWindowSize();

//scene
export const scene = new THREE.Scene;
scene.fog=new THREE.Fog( 0xffffff, 90, 125 );

// camera
export const camera = new THREE.PerspectiveCamera(45, width / height, 0.1,10000);

// light
export const light = new THREE.PointLight(0xFFFFFF);
light.position.set(10, 50, 130);

// renderer
const container = document.querySelector('#container');
export const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
container.appendChild(renderer.domElement);
const canvas = document.querySelector("#container canvas");
setSize();

// controls
export const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = true;
controls.maxDistance = 1500;
controls.minDistance = 0;

// resize
window.addEventListener( 'resize', setSize, false );

// init
scene.add(light);
scene.add(camera);
camera.position.set(0,70,70);

// cube
const cube = new THREE.Mesh( new THREE.CubeGeometry( 20, 20, 20 ), new THREE.MeshNormalMaterial() );
cube.position.set(0, 0, 0);
scene.add(cube);
camera.lookAt(cube.position);

//utils

function getWindowSize() {
  return [
    window.innerWidth * 2,
    window.innerHeight * 2
  ]
}

function setSize(){
    [ width, height ] = getWindowSize();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize( width, height );
    // retina fix
    canvas.style["max-width"] = width/2 + 'px';
    canvas.style["max-height"] = height/2 + 'px';
    renderer.render( scene, camera );
}