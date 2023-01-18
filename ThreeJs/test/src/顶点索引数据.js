// 顶点法向量
// 没有定义顶点法向量数据。没有法向量数据，点光源、平行光等带有方向性的光源不会起作用，三角形平面整个渲染效果相对暗淡，而且两个三角形分界位置没有棱角感。
import init from './utils/init'

init(({ scene, controls, camera, THREE, renderer, T }) => {
    var geometry = new THREE.BufferGeometry(); //声明一个空几何体对象
    //类型数组创建顶点位置position数据
    var vertices = new Float32Array([
        0, 0, 0, //顶点1坐标
        80, 0, 0, //顶点2坐标
        80, 80, 0, //顶点3坐标
        0, 80, 0, //顶点6坐标
    ]);
    // 创建属性缓冲区对象
    var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组
    // 设置几何体attributes属性的位置position属性
    geometry.attributes.position = attribue
    var normals = new Float32Array([
        0, 0, 1, //顶点1法向量
        0, 0, 1, //顶点4法向量
        0, 0, 1, //顶点5法向量
        0, 0, 1, //顶点6法向量
    ]);
    // 设置几何体attributes属性的位置normal属性
    geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); //3个为一组,表示一个顶点的xyz坐标

    // 使用顶点索引
    const indexes = new Uint16Array([
        0, 1, 2,
        0, 2, 3
    ])
    geometry.index = new THREE.BufferAttribute(indexes, 1)
    const material = new T.MeshBasicMaterial({
        color: 0x0000ff,
        side: T.DoubleSide // 两面可见
    })
    const mesh = new T.Mesh(geometry, material)
    scene.add(mesh)
})