import init from '@/utils/init'

init(({ scene, THREE }) => {
    // 利用曲线api进行绘制
    // const curve = new THREE.EllipseCurve(
    //     0, 100,            // 圆心位置
    //     10, 100,           // x，y方向⚪的半径
    //     0, 2 * Math.PI,  // 绘制的起始和终止角度，默认0为x轴正方向
    //     false,            // 椭圆是否顺时针绘制
    //     0                 // 椭圆旋转角度
    // );

    // // 获取所绘制⚪的顶点位置
    // const points = curve.getPoints(50);
    // console.log(points);

    // const geometry = new THREE.BufferGeometry().setFromPoints(points);
    // console.log(geometry);

    // const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

    // // Create the final object to add to the scene
    // const ellipse = new THREE.Line(geometry, material);
    // scene.add(ellipse)
    // 创建点进行绘制
    // var geometry = new THREE.BufferGeometry(); //声明一个几何体对象Geometry
    // var R = 100; //圆弧半径

    // var N = 1500; //分段数量
    // // 批量生成圆弧上的顶点数据
    // const points: THREE.Vector3[] = []
    // for (var i = 0; i < N; i++) {
    //     var angle = 2 * Math.PI / N * i;
    //     var x = R * Math.sin(angle);
    //     var y = R * Math.cos(angle);
    //     points.push(new THREE.Vector3(x, y + 200, 0));
    // }
    // geometry.setFromPoints(points)
    // // 插入最后一个点，line渲染模式下，产生闭合效果
    // // geometry.vertices.push(geometry.vertices[0])
    // //材质对象
    // var material = new THREE.LineBasicMaterial({
    //     color: 0xffffff
    // });
    // //线条模型对象
    // var circular = new THREE.Line(geometry, material);
    // scene.add(circular); //线条对象添加到场景中
    // 画线
    const points: THREE.Vector3[] = [new THREE.Vector3(50, 0, 0), new THREE.Vector3(0, 70, 0)]
    
}, { axesHelper: true })