import * as THREE from 'three'

// 定义渲染尺寸
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// 初始化场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1A1A1A)
scene.fog = new THREE.Fog(0x1A1A1A, 1, 1000) // 定义烟雾效果

// 相机
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height)
scene.add(camera);
camera.position.set(20, 100, 450);

// 渲染器
const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
window.document.appendChild(renderer.domElement)

// 
