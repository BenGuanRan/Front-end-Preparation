// 几何顶点颜色
import init from './utils/init'

const { scene, T, renderer, camera } = init()

// 创建一个BUffer类型的几何体对象
const geometry = new T.BufferGeometry()

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
var attribute = new T.BufferAttribute(vertices, 3) // 三个一组表示顶点的xyz坐标
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribute;

const colors = new Float32Array([
    1, 0, 0, //顶点1颜色
    0, 1, 0, //顶点2颜色
    0, 0, 1, //顶点3颜色
    1, 100, 0, //顶点4颜色
    0, 1, 1, //顶点5颜色
    1, 0, 1, //顶点6颜色
])

geometry.attributes.color = new T.BufferAttribute(colors, 3)

// 关于材质的属性.vertexColors可以查看Material文档介绍，
// 属性.vertexColors的默认值是THREE.NoColors，这也就是说模
// 型的颜色渲染效果取决于材质属性.color，如果把材质属性.vertexColors
// 的值设置为THREE.VertexColors,threejs渲染模型的时候就会使用几何体
// 的顶点颜色数据geometry.attributes.color。
// 开启点渲染模式
var material = new T.PointsMaterial({
    // color: 0x00ff00,
    vertexColors: true, //以顶点颜色为准
    size: 10.0 //点对象像素尺寸
})
var points = new T.Points(geometry, material); //网格模型对象Mesh
scene.add(points)



