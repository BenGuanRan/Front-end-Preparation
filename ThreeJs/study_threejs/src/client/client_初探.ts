import * as THREE from 'three'

// 创建场景
const scene = new THREE.Scene()
// 创建相机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
// 设置相机对象位置
camera.position.set(0, 0, 10)
scene.add(camera);
// 创建一个物体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, -900)
scene.add(cube);

// 初始化渲染器
const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, wi`ndow.innerHeight)
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera)