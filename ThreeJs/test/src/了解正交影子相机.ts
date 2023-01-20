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
    const ball_material = new THREE.MeshLambertMaterial({ color: 0xcfc000, wireframe: true, });
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
    directionalLight.position.set(200, 200, 100)
    scene.add(directionalLight);
    const helper = new THREE.DirectionalLightHelper(directionalLight, 500);
    scene.add(helper);
    const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
    scene.add(directionalLightCameraHelper)

    // 渲染器开启阴影计算模式
    renderer!.shadowMap.enabled = true

    // 球体为产生投影的模型
    ball.castShadow = true
    // 平面为接受投影的模型
    plane.receiveShadow = true
    // 用于计算阴影的光源对象
    directionalLight.castShadow = true
    directionalLight.shadow.camera.near = 10
    directionalLight.shadow.camera.far = 400
    directionalLight.shadow.camera.left = -100; //产生阴影距离位置的最左边位置
    directionalLight.shadow.camera.right = 100; //最右边
    directionalLight.shadow.camera.top = 400; //最上边
    directionalLight.shadow.camera.bottom = -400; //最下面
    //这两个值决定使用多少像素生成阴影 默认512
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.mapSize.width = 1024;
}, { axesHelper: true })