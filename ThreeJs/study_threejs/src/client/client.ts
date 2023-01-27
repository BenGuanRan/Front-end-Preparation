import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'

// 创建场景
const scene = new THREE.Scene()
// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
// 设置相机对象位置
camera.position.set(0, 0, 10)
scene.add(camera);
// 创建一个物体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 初始化渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);


// 设置轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);
// 设置控制器阻尼
controls.enableDamping = true

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 设置时钟
const clock = new THREE.Clock()

// 引入gsap
gsap.to(cube.position, { x: 10, duration: 5 })
// gsap.to(cube.rotation, { x: 100, duration: 25 })
function animate() {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}
animate()

// 设置自适应
window.onresize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    
}