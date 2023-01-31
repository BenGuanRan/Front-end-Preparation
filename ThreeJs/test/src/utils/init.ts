import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function init(
    callback: (obj: InitCallbackProps) => any,
    options: InitOptionsProps = { axesHelper: false, plane: false, d_light: false }
) {

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
    window.document.querySelector('#threejs_container')!.appendChild(renderer.domElement)

    // 页面缩放事件监听
    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        // 更新渲染
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        // 更新相机
        camera.aspect = sizes.width / sizes.height;
        // 更新相机的投影矩阵
        camera.updateProjectionMatrix();
    });

    // 轨道控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.update();

    if (options.axesHelper) {
        // 创建一个辅助轴
        const axesHelper = new THREE.AxesHelper(500);
        scene.add(axesHelper);
    }

    // 光源
    const light = new THREE.AmbientLight('#ffffff', 1);
    scene.add(light);

    // 平行光
    if (options.d_light) {
        const d_light = new THREE.DirectionalLight(0xFFFFFF, 0.5);
        const helper = new THREE.DirectionalLightHelper(d_light, 5, 0xff000000);
        d_light.translateX(1000)
        d_light.translateY(1000)
        d_light.translateZ(1000)
        renderer.shadowMap.enabled = true
        d_light.castShadow = true
        d_light.shadow.camera.near = 10
        d_light.shadow.camera.far = 20000
        d_light.shadow.camera.left = -100; //产生阴影距离位置的最左边位置
        d_light.shadow.camera.right = 100; //最右边
        d_light.shadow.camera.top = 400; //最上边
        d_light.shadow.camera.bottom = -400; //最下面
        d_light.shadow.mapSize.height = 1024;
        d_light.shadow.mapSize.width = 1024;
        scene.add(d_light);
        scene.add(helper);
    }
    if (options.plane) {
        // 构造一个平面
        const geometry = new THREE.PlaneGeometry(1000, 1000)
        const material = new THREE.MeshLambertMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
        const plane = new THREE.Mesh(geometry, material);
        plane.rotateX(Math.PI / 2)
        plane.receiveShadow = true
        scene.add(plane);
    }


    const returnFunc = callback({
        scene, controls, camera, renderer, THREE
    })




    function animate(time?: DOMHighResTimeStamp) {

        requestAnimationFrame(animate)
        renderer.render(scene, camera)
        controls.update()
        // 进行一些渲染函数动作
        if (returnFunc && !(returnFunc instanceof Promise)) returnFunc(time)
    }
    return animate()
}