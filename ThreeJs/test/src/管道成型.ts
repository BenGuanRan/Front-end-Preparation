import init from '@/utils/init'

init(({ scene, THREE: T }) => {
    // 直线
    const p1 = new T.Vector3(100, 100, 100)
    const p2 = new T.Vector3(0, 0, 0)
    const line_geometry: THREE.BufferGeometry = new T.BufferGeometry()
    line_geometry.setFromPoints([p1, p2])
    const line = new T.Line(line_geometry, new T.LineBasicMaterial({
        color: 0xffffff
    }))
    scene.add(line)
    // 采用CR算法绘制样条曲线
    const cr_curve = new T.CatmullRomCurve3([
        new T.Vector3(-50, 20, 90),
        new T.Vector3(-10, 40, 40),
        new T.Vector3(0, 0, 0),
        new T.Vector3(60, -60, 0),
        new T.Vector3(70, 0, 80)
    ]);
    const cr_points = cr_curve.getPoints(100)
    const cr_geometry = new T.BufferGeometry().setFromPoints(cr_points)
    // scene.add(new T.Line(cr_geometry, new T.LineBasicMaterial(
    //     { color: 0x0000ff }
    // )))

    // 样条曲线生成圆管
    const tube = new T.TubeGeometry(cr_curve, 40, 2, 25)
    scene.add(new T.Mesh(tube, new T.MeshBasicMaterial({
        side: T.DoubleSide,
        wireframe: true
    })))
})