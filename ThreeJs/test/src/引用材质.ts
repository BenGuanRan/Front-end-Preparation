import init from '@/utils/init'

init(({ THREE: T, scene }) => {
    // 将纹理贴图映射到矩形面上
    const plane_geometry = new T.SphereGeometry(60, 25, 25);
    const texture = new T.TextureLoader().load('./images/ground.JPG')
    scene.add(new T.Mesh(plane_geometry, new T.MeshLambertMaterial({
        map: texture,
        // wireframe: true
    })))
})