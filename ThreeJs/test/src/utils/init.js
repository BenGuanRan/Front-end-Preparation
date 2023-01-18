import * as THREE from 'three'
import { IcosahedronGeometry } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { gsap } from 'gsap'

export default function init(callback) {

    // 定义渲染尺寸
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    // 初始化场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1A1A1A)
    // scene.fog = new THREE.Fog(0x1A1A1A, 1, 1000) // 定义烟雾效果

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

    // 创建一个辅助轴
    const axesHelper = new THREE.AxesHelper(500);
    scene.add(axesHelper);
    callback({
        scene, controls, camera, T: THREE, renderer, THREE
    })

    // 光源
    const light = new THREE.AmbientLight(0xdeedff, 1.5);
    scene.add(light);

    function animate() {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
        controls.update()
    }


    animate()
    return renderer.render(scene, camera)
}