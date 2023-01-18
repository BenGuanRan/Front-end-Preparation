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
const axesHelper = new THREE.AxesHelper(500);
scene.add(axesHelper);

// 创建一个BUffer类型的几何体对象
const geometry = new THREE.BufferGeometry()

// 类型数组创建顶点数据
var vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    50, 0, 0, //顶点2坐标
    0, 100, 0, //顶点3坐标
    0, 0, 10, //顶点4坐标
    0, 0, 100, //顶点5坐标
    50, 0, 10, //顶点6坐标
])

// 创建缓冲区对象
var attribute = new THREE.BufferAttribute(vertices, 3) // 三个一组表示顶点的xyz坐标
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribute;

// 开启网格模式渲染
// var material = new THREE.MeshBasicMaterial({
//     color: 0x0000ff,
//     side: THREE.DoubleSide // 两面可见
// })
// var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

// 开启点渲染模式
// var material = new THREE.PointsMaterial({
//     color: 0x00ff00,
//     size: 10.0 //点对象像素尺寸
// })
// var points = new THREE.Points(geometry, material); //网格模型对象Mesh
// scene.add(points)

// 线模型
var material = new THREE.PointsMaterial({
    color: 0xff0000
})
const line = new THREE.Line(geometry, material)
scene.add(line)

renderer.render(scene, camera)


