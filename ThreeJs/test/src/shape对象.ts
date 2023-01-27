import init from '@/utils/init'

init(({ scene, THREE }) => {
    var points = [
        new THREE.Vector2(-50, -50),
        new THREE.Vector2(-60, 0),
        new THREE.Vector2(0, 50),
        new THREE.Vector2(60, 0),
        new THREE.Vector2(50, -50),
        new THREE.Vector2(-50, -50),
    ]
    // 通过顶点定义轮廓
    var shape = new THREE.Shape(points);


    const geometry = new THREE.ShapeGeometry(shape, 25);

    const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
        wireframe: true
    }));
    scene.add(mesh)
}, {
    axesHelper: true
})