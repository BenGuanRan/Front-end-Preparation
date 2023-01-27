import init from '@/utils/init'

init(({ THREE, scene }) => {
    var geometry = new THREE.BoxGeometry(100, 64, 64); //立方体
    // var geometry = new THREE.PlaneGeometry(204, 102, 4, 4); //矩形平面
    // var geometry = new THREE.SphereGeometry(60, 25, 25); //球体
    // var geometry = new THREE.CylinderGeometry(60, 60, 25,25); //圆柱
    //
    // 材质对象1
    var material_1 = new THREE.MeshPhongMaterial({
        color: 0xffff3f
    })
    var textureLoader = new THREE.TextureLoader(); // 纹理加载器
    var textureNormal = textureLoader.load('./images/a_normal.jpg'); // 加载图片，返回Texture对象
    var texture = textureLoader.load('./images/a.jpg'); // 加载图片，返回Texture对象

    var material_2 = new THREE.MeshPhongMaterial({
        map: texture, // 设置纹理贴图
        // wireframe:true,
        normalMap: textureNormal,
        normalScale: new THREE.Vector2(2.5, 2.5),
    });
    // 设置材质数组

    // 设置数组材质对象作为网格模型材质参数
    var mesh = new THREE.Mesh(geometry, material_2); //网格模型对象Mesh
    mesh.translateY(200)
    mesh.castShadow = true
    scene.add(mesh); //网格模型添加到场景中
}, {
    plane: true,
    d_light: true,
    axesHelper: true
})