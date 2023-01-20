import init from '@/utils/init'
import { BufferAttribute, BufferGeometry, PointsMaterial, Vector3 } from 'three'

init(({ scene, THREE }) => {
    const point_geometry = new BufferGeometry()
    const p = new Float32Array([
        10, 0, 0
    ])
    point_geometry.setAttribute('position', new BufferAttribute(p, 3))
    const point = new THREE.Points(point_geometry, new PointsMaterial({
        color: '#ffffff',
        size: 10
    }))
    scene.add(point)
    console.log(point.position);
    const world_position = new THREE.Vector3()
    point.getWorldPosition(world_position)
    console.log(point);


}, { axesHelper: true })