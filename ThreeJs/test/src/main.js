import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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
const renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
window.document.body.appendChild(renderer.domElement)

// 页面缩放事件监听
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    // 更新渲染
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    // 更新相机
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
});

// 轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.update();

// 光源
const light = new THREE.AmbientLight(0xdeedff, 1.5);
scene.add(light);

// 创建星球
const SphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x03c03c,
    wireframe: true,
});
const SphereGeometry = new THREE.SphereGeometry(80, 32, 32);
const planet = new THREE.Mesh(SphereGeometry, SphereMaterial);
scene.add(planet);

// 创建圆环
const TorusGeometry = new THREE.TorusGeometry(150, 8, 2, 120);
const TorusMaterial = new THREE.MeshLambertMaterial({
    color: 0x40a9ff,
    wireframe: true
});
const ring = new THREE.Mesh(TorusGeometry, TorusMaterial);
ring.rotation.x = Math.PI / 2;
ring.rotation.y = -0.1 * (Math.PI / 2);
scene.add(ring);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);

}

animate()