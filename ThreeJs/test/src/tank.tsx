import init from '@/utils/init'
import { Vector3 } from 'three'

init(({ scene, THREE, renderer }) => {
    // 绘制坦克
    const panzer = new THREE.Object3D()
    scene.add(panzer)
    const boxGeom = new THREE.BoxGeometry(4, 1, 8)
    const boxMater = new THREE.MeshPhongMaterial({
        color: 0x6688aa
    })
    const box = new THREE.Mesh(boxGeom, boxMater)
    box.position.set(0, 1.7, 0)
    panzer.add(box)
    const tankCamera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000)
    tankCamera.position.set(0, 3, -6)
    tankCamera.rotation.y = Math.PI
    box.add(tankCamera)
    const paoTaiGeom = new THREE.SphereGeometry(2, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.5)
    const paoTai = new THREE.Mesh(paoTaiGeom, new THREE.MeshPhongMaterial({
        color: 0x156415
    }))
    paoTai.position.set(0, 0.5, 0)
    box.add(paoTai)
    const turretGeometry = new THREE.BoxGeometry(0.5, 0.5, 5)
    const turretMesh = new THREE.Mesh(turretGeometry, new THREE.MeshPhongMaterial({
        color: 0x464258
    }))
    const turretPivot = new THREE.Object3D()
    turretPivot.position.y = 1.2
    turretMesh.position.z = 2.5
    turretPivot.add(turretMesh)
    box.add(turretPivot)

    // 绘制目标
    const target = new THREE.Mesh(new THREE.SphereGeometry(0.5, 36, 36), new THREE.MeshPhongMaterial({
        color: 0x00ff00
    }))
    target.position.set(20, 20, 20)
    scene.add(target)
    turretPivot.lookAt(20, 20, 20)

    // 创建轨迹
    // 绘制移动路径
    const curve = new THREE.SplineCurve([
        new THREE.Vector2(-10, 20),
        new THREE.Vector2(-5, 5),
        new THREE.Vector2(0, 0),
        new THREE.Vector2(5, -5),
        new THREE.Vector2(10, 0),
        new THREE.Vector2(5, 10),
        new THREE.Vector2(-5, 10),
        new THREE.Vector2(-10, -10),
        new THREE.Vector2(-15, -8),
        new THREE.Vector2(-10, 20)
    ])

    const points = curve.getPoints(50)
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 })
    const splineObject = new THREE.Line(geometry, material)
    splineObject.rotation.x = Math.PI * 0.5
    splineObject.position.y = 0.05
    scene.add(splineObject)
    const tankPosition = new THREE.Vector2()
    const tankTarget = new THREE.Vector2()
    return (time: DOMHighResTimeStamp) => {
        if (time)
            console.log(time);

        // 上下移动目标
        target.position.y = Math.sin(time * 0.01) * 10
        let targetPosition = new Vector3()
        // 炮台瞄准目标
        target.getWorldPosition(targetPosition)
        turretPivot.lookAt(targetPosition)
        // 根据路线移动坦克
        const tankTime = time * 0.05
        curve.getPointAt(tankTime % 1, tankPosition)
        // 获取 路径 坦克前一点坐标 用于坦克头 向前
        curve.getPointAt((tankTime + 0.01) % 1, tankTarget)
        // 位移
        panzer.position.set(tankPosition.x, 0, tankPosition.y)
        panzer.lookAt(tankTarget.x, 0, tankTarget.y)

        renderer!.render(scene, tankCamera)
    }
}, {
    plane: true
})  