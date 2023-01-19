import init from '@/utils/init'

init(({ THREE, scene }) => {
    const group = new THREE.Group();
    // 创建500个三角形
    for (let i = 0; i < 5000; i++) {
        let geometry: THREE.BufferGeometry = new THREE.BufferGeometry()
        let vertices = new Float32Array([
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50
        ])
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
        let triangle_material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(
                Math.random(),
                Math.random(),
                Math.random()
            ),
            side: THREE.DoubleSide, // 两面可见
            opacity: 0.1,
            transparent: true
        })
        let triangle = new THREE.Mesh(geometry, triangle_material)
        group.add(triangle)
    }
    scene.add(group)
})