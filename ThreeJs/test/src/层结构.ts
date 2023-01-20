import init from '@/utils/init'

init(({ THREE, scene }) => {
    // 头部网格模型和组
    var headMesh = sphereMesh(10, 0, 0, 0);
    headMesh.name = "脑壳"
    var leftEyeMesh = sphereMesh(1, 8, 5, 4);
    leftEyeMesh.name = "左眼"
    var rightEyeMesh = sphereMesh(1, 8, 5, -4);
    rightEyeMesh.name = "右眼"
    var headGroup = new THREE.Group();
    headGroup.name = "头部"
    headGroup.add(headMesh, leftEyeMesh, rightEyeMesh);
    // 身体网格模型和组
    var neckMesh = cylinderMesh(3, 10, 0, -15, 0);
    neckMesh.name = "脖子"
    var bodyMesh = cylinderMesh(14, 30, 0, -35, 0);
    bodyMesh.name = "腹部"
    var leftLegMesh = cylinderMesh(4, 60, 0, -80, -7);
    leftLegMesh.name = "左腿"
    var rightLegMesh = cylinderMesh(4, 60, 0, -80, 7);
    rightLegMesh.name = "右腿"
    var legGroup = new THREE.Group();
    legGroup.name = "腿"
    legGroup.add(leftLegMesh, rightLegMesh);
    var bodyGroup = new THREE.Group();
    bodyGroup.name = "身体"
    bodyGroup.add(neckMesh, bodyMesh, legGroup);
    // 人Group
    var personGroup = new THREE.Group();
    personGroup.name = "人"
    personGroup.add(headGroup, bodyGroup)
    personGroup.translateY(110)
    scene.add(personGroup);

    var light
    // 球体网格模型创建函数
    function sphereMesh(R: number, x: number, y: number, z: number) {
        var geometry = new THREE.SphereGeometry(R, 25, 25); //球体几何体
        var material = new THREE.MeshPhongMaterial({
            color: 0x0000ff
        }); //材质对象Material
        var mesh = new THREE.Mesh(geometry, material); // 创建网格模型对象
        mesh.position.set(x, y, z);
        return mesh;
    }
    // 圆柱体网格模型创建函数
    function cylinderMesh(R: number, h: number, x: number, y: number, z: number) {
        var geometry = new THREE.CylinderGeometry(R, R, h, 25, 25); //球体几何体
        var material = new THREE.MeshPhongMaterial({
            color: 0x0000ff
        }); //材质对象Material
        var mesh = new THREE.Mesh(geometry, material); // 创建网格模型对象
        mesh.position.set(x, y, z);
        return mesh;
    }
    scene.traverse(function (obj) {
        if (obj instanceof THREE.Mesh)
            switch (obj.name) {
                case '左眼':
                    ((obj as THREE.Mesh).material as THREE.MeshPhongMaterial).color.set(0xffff00)
                    break
                case '右眼':
                    ((obj as THREE.Mesh).material as THREE.MeshPhongMaterial).color.set(0xffffff)
                    break
                case '脑壳':
                    ((obj as THREE.Mesh).material as THREE.MeshPhongMaterial).color.set(0x465435)
                    break
                case '脖子':
                    ((obj as THREE.Mesh).material as THREE.MeshPhongMaterial).color.set('#f9cc36')
                    break
                case '腹部':
                    ((obj as THREE.Mesh).material as THREE.MeshPhongMaterial).color.set('#3486cf')
                    break
                case '左腿':
                    ((obj as THREE.Mesh).material as THREE.MeshPhongMaterial).color.set('#ba4b2b')
                    break
                case '右腿':
                    ((obj as THREE.Mesh).material as THREE.MeshPhongMaterial).color.set('#5af07e')
                    break
            }

        // if (obj.type === "Group") {
        //     console.log(obj.name);
        // }
        // if (obj.type === "Mesh") {
        //     console.log('  ' + obj.name);
        //     obj.attributes.color.set(0xffff00);
        // }
        if (obj.name === "左眼" || obj.name === "右眼") {
            console.log();

        }
    })
})