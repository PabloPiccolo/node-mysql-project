// import * as THREE from '../node_modules/three/build/three.module.js'
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';







//zmienne
const canvas = document.querySelector('.canvas')
const gearbox = document.querySelector('.gearbox')
const cuboid = document.querySelector('.cube')

 const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(85, 300 / 300, 0.1, 1000)


// canvas.appendChild(renderer.domElement)
const loader = new GLTFLoader()
let obj

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
renderer.outputColorSpace = THREE.SRGBColorSpace
// renderer.setClearColor(0xa3a3a3)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.shadowMap.enabled = true
renderer.setSize(290, 290)
canvas.appendChild(renderer.domElement)

//kostka
const cubeFunction = () => {
  // const uvTexture = new THREE.TextureLoader().load('./assets/jpgpng.png');
   const uvTexture = new THREE.TextureLoader().load("/jpgpng.png")
  const geometry = new THREE.BoxGeometry(5, 3, 3);
  const material = new THREE.MeshStandardMaterial({ map: uvTexture })
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube)
  cube.position.set(0, 0, 7)
  
}
// //funkcja przekładni
const gearboxFunction = () => {
  loader.load('/scene.gltf', function(gltff) {
    obj = gltff.scene
    obj.rotation.set(0, 0, 0)
    obj.position.set(0, 0, 0)
    scene.add(obj)
  })
}



const resetFunction =() =>{
 scene.remove(obj);
 cubeFunction();
}

const textureMaterial = new THREE.TextureLoader()
const baseColor = textureMaterial.load('/tlo.jpg')
scene.background = baseColor;


camera.position.z = 0
camera.position.x = 0
camera.position.y = 20
// renderer.render(scene, camera);





//light
const color3 = new THREE.Color('rgb(255,255,255)')
const light1 = new THREE.DirectionalLight(color3, 5)
light1.position.set(0, 15, 0)
scene.add(light1)
const light2 = new THREE.DirectionalLight(color3, 5)
light2.position.set(0, -15, 0)
scene.add(light2)
const light3 = new THREE.DirectionalLight(color3, 5)
light3.position.set(15, 0, 0)
scene.add(light3)
const light4 = new THREE.DirectionalLight(color3, 5)
light4.position.set(-15, 0, 0)
scene.add(light4)
const light5 = new THREE.DirectionalLight(color3, 5)
light5.position.set(0, 0, 15)
scene.add(light5)
const light6 = new THREE.DirectionalLight(color3, 5)
light6.position.set(0, 0, -15)
scene.add(light6)



const controls = new OrbitControls(camera, renderer.domElement)
controls.update()
function animate () {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
 
}
 animate()


  gearbox.addEventListener('click', gearboxFunction);

cuboid.addEventListener('click',resetFunction)



// const model3d = document.querySelector('.model3d');


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setAnimationLoop( animate );
// model3d.appendChild(renderer.domElement);
// // document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate() {

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

// 	renderer.render( scene, camera );

// }





