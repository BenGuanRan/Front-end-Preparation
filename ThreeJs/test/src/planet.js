import * as THREE from 'three'
import { IcosahedronGeometry } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { gsap } from 'gsap'

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



// 轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.update();

// 创建一个辅助轴
// const axesHelper = new THREE.AxesHelper(500);
// scene.add(axesHelper);

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
ring.rotation.y = -Math.PI / 6;
scene.add(ring);

// 创建一个卫星
const Icosahedron = new IcosahedronGeometry(10, 0)
const IcoMaterial = new THREE.MeshToonMaterial({ color: 0xfffc00 });
const satellite = new THREE.Mesh(Icosahedron, IcoMaterial);
scene.add(satellite);
satellite.position.set(100, 100, 100)

// 创建星群
// 为节省性能，这里创建了一个Group，并将星星放到Group中
const stars_group = new THREE.Group()
let star_nums = 500
for (let i = 0; i < star_nums; i++) {
    const star = new THREE.IcosahedronGeometry(Math.random() * 1, Math.round(Math.random()));
    const star_material = new THREE.MeshToonMaterial({ color: 0xeeeeee })
    const star_mesh = new THREE.Mesh(star, star_material)
    star_mesh.position.set((Math.random() - 0.5) * 500, (Math.random() - 0.5) * 500, (Math.random() - 0.5) * 500)
    star_mesh.rotation.set(Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI)
    stars_group.add(star_mesh)
}
scene.add(stars_group)

// 星球动画
gsap.to(planet.rotation, {
    y: Math.PI * 2,
    duration: 50,
    repeat: -1,
    ease: 'none'
})

// 环动画
gsap.to(ring.rotation, {
    z: Math.PI * 2,
    duration: 30,
    repeat: -1,
    ease: 'none'
})


// 星星动画
gsap.to(stars_group.rotation, {
    y: Math.PI * 2,
    z: Math.PI * 2,
    duration: 100,
    repeat: -1
})

let rot = 0;
// 动画
const axis = new THREE.Vector3(1, 1.732, 0);
const tick = () => {
    // 更新渲染器
    renderer.render(scene, camera);
    // 给网格模型添加一个转动动画
    rot += Math.random() * 0.8;
    const radian = (rot * Math.PI) / 180;
    // 星球位置动画
    planet && (planet.rotation.y += .005);
    // 星球轨道环位置动画
    // 卫星位置动画
    satellite.position.x = 250 * Math.sin(radian);
    satellite.position.y = 100 * Math.cos(radian);
    satellite.position.z = -100 * Math.cos(radian);
    satellite.rotation.x += 0.005;
    satellite.rotation.y += 0.005;
    satellite.rotation.z -= 0.005;
    // 星星动画
    // stars_group.rotation.y += 0.0009;
    // stars_group.rotation.z -= 0.0003;
    // 更新控制器
    controls.update();
    // 页面重绘时调用自身
    window.requestAnimationFrame(tick);
}
tick();