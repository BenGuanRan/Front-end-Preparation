import init from '@/utils/init'

init(({ scene, THREE }) => {
    const loader = new THREE.TextureLoader()
    scene.background = loader.load('./assets/images/R-C.jpg')
    // 创建一个太阳
    const sphereGeometry = new THREE.SphereGeometry(2, 36, 36)
    const sunTexture = loader.load('./assets/images/canvas-orange.jpg')
    const sunMaterial = new THREE.MeshBasicMaterial({
        map: sunTexture
    })
    const sun = new THREE.Mesh(sphereGeometry, sunMaterial)
    sun.scale.set(10, 10, 10)
    scene.add(sun)
    // 创建点光源在太阳内部
    const pointLight = new THREE.PointLight(0xffffff, 20);
    scene.add(pointLight)
    // 创建地球
    const earthTexture = loader.load('./assets/images/Snipaste_2023-01-31_16-09-33.png')
    const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthTexture
    })
    const earth = new THREE.Mesh(sphereGeometry, earthMaterial)
    earth.scale.set(3, 3, 3)
    scene.add(earth)

    const solarSystem = new THREE.Object3D()
    scene.add(solarSystem)
    solarSystem.add(earth, sun)

    // 创建一个月球
    const moonTexture = loader.load('./assets/images/a.jpg')
    const moonMaterial = new THREE.MeshPhongMaterial({
        map: moonTexture
    })
    const moon = new THREE.Mesh(sphereGeometry, moonMaterial)

    const earthMoonSystem = new THREE.Object3D()
    earthMoonSystem.position.set(100, 0, 0)
    earthMoonSystem.add(earth, moon)
    moon.position.set(10, 0, 0)
    solarSystem.add(earthMoonSystem)

    console.log(moon.position);
    var worldPosition = new THREE.Vector3();

    console.log(moon.getWorldPosition(worldPosition));

    return () => {
        // 太阳自转
        sun.rotation.y += 0.04
        // 太阳系旋转
        solarSystem.rotation.y += 0.01
        // 地球自转
        earth.rotation.y += 0.2
        // 地月星系旋转
        earthMoonSystem.rotation.y += 0.1
        // 月球自转
        moon.rotation.y += 0.1
    }
})