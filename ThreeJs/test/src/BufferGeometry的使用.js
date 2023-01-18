import init from './utils/init'

init(({ scene, THREE }) => {
    // 顶点个数
    var particles = 500000;

    var geometry = new THREE.BufferGeometry();

    // 每个顶点位置
    let positions = [];
    // 颜色值
    var colors = [];

    // 临时颜色类型
    var color = new THREE.Color();

    var n = 1000, n2 = n / 2;

    for (var i = 0; i < particles; i++) {

        // positions, 形成一个长方体, x, y, z的范围都是从-500到500, 形成的长方体的长宽高都为500
        var x = Math.random() * n - n2;
        var y = Math.random() * n - n2;
        var z = Math.random() * n - n2;

        positions.push(x, y, z);

        // colors, 设置颜色, 同理, 从0到1

        var vx = (x / n) + 0.5;
        var vy = (y / n) + 0.5;
        var vz = (z / n) + 0.5;

        color.setRGB(vx, vy, vz);

        colors.push(color.r, color.g, color.b);

    }
    // 设置位置信息
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    // 设置颜色信息
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    // 计算边界球体
    geometry.computeBoundingSphere();

    // 创建物资
    var material = new THREE.PointsMaterial({ size: 15, vertexColors: true });
    // 创建点云
    const points = new THREE.Points(geometry, material);
    scene.add(points);
})