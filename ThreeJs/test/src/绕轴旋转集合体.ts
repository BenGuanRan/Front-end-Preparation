import init from "@/utils/init";

init(({ scene, THREE }) => {
    // 定义绕轴旋转的几何体
    var points = [
        new THREE.Vector2(50, 60),
        new THREE.Vector2(25, 0),
        new THREE.Vector2(50, -60)
    ];
    const curve: THREE.SplineCurve = new THREE.SplineCurve(points);
    var geometry = new THREE.LatheGeometry(curve.getPoints(30), 30);
    var material = new THREE.MeshPhongMaterial({
        color: 0x0000ff,//三角面颜色
        side: THREE.DoubleSide,//两面可见
        wireframe: true
    });//材质对象
    var mesh = new THREE.Mesh(geometry, material);//旋转网格模型对象
    scene.add(mesh);//旋转网格模型添加到场景中
})