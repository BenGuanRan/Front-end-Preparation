import * as THREE from 'three'
import { sRGBEncoding, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000)
scene.add(camera)
camera.position.set(20, 100, 20);
camera.lookAt(0, 0, 0)



const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
window.document.body.appendChild(renderer.domElement)

const axesHelper = new THREE.AxesHelper(5000);
scene.add(axesHelper);

const light = new THREE.AmbientLight(0xdeedff, 1.5);
scene.add(light);

const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
const material = new THREE.MeshLambertMaterial({
    color: 0xa0a0a0,
    wireframe: true
})
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
const ring = new THREE.RingGeometry(7, 17, 32);

const ring_material = new THREE.MeshLambertMaterial({
    color: 0xa0a0a0,
    wireframe: true
})
const ring_mesh = new THREE.Mesh(ring, ring_material)
ring_mesh.rotation.x = Math.PI / 2;
scene.add(ring_mesh)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.update()

const cylinder = new THREE.Mesh(geometry, material)
scene.add(cylinder)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()
}


animate()