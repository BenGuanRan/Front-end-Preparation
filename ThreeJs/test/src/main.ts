import init from '@/utils/init'

init(({ THREE, scene, renderer }) => {
    // 构造一个平面
    const geometry = new THREE.PlaneGeometry(1000, 1000)
    const material = new THREE.MeshLambertMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotateX(Math.PI / 2)
    scene.add(plane);
    // 添加一个球体
    const ball_geo = new THREE.SphereGeometry(30, 64, 64)
    const ball_material = new THREE.MeshLambertMaterial({ color: 0xcfc000 });
    const ball = new THREE.Mesh(ball_geo, ball_material);
    ball_geo.translate(100, 100, - 20)
    scene.add(ball);


    // 添加光源
    // 点光源
    // var point = new THREE.PointLight(0xeeeeee);
    //设置点光源位置，改变光源的位置
    // point.position.set(-100, 150, 20);
    // scene.add(point);
    // 设置聚光源
    // const spotLight = new THREE.SpotLight(
    //     0xffffff,
    //     5,
    //     800,
    //     Math.PI / 12
    // )
    // spotLight.position.set(400, 400, -50);
    // spotLight.target = ball
    // spotLight.castShadow = true // 开启阴影
    // scene.add(spotLight);
    // const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    // scene.add(spotLightHelper);
    // 自然光
    // const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.5)
    // hemiLight.position.set(0, 500, 0)
    // scene.add(hemiLight)
    // const helper = new THREE.HemisphereLightHelper(hemiLight, 5);
    // scene.add(helper);
    // 平行光
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 400, 0)
    scene.add(directionalLight);
    const helper = new THREE.DirectionalLightHelper(directionalLight, 500);
    scene.add(helper);

    // 渲染器开启阴影计算模式
    renderer!.shadowMap.enabled = true

    // 球体为产生投影的模型
    ball.castShadow = true
    // 平面为接受投影的模型
    plane.receiveShadow = true
    // 用于计算阴影的光源对象
    directionalLight.castShadow = true
}, { axesHelper: true })