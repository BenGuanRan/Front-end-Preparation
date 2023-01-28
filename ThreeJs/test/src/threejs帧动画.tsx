import init from '@/utils/init'

init(({ scene, THREE: t }) => {
    const ball_geometry = new t.SphereGeometry(30, 32, 32)
    const material = new t.MeshBasicMaterial({
        color: 0xffccee,
        wireframe: true
    })
    const box_geometry = new t.BoxGeometry(100, 10, 10)
    const ball = new t.Mesh(ball_geometry, material)
    ball.name = 'Ball'
    ball.position.set(0, 100, 0)
    ball.castShadow = true
    const box = new t.Mesh(box_geometry, material)
    box.name = 'Box'
    box.position.set(100, 0, 0)
    const group = new t.Group()
    group.add(ball, box)
    scene.add(group)
    // 创建动画数据
    const times = [0, 10]
    const values = [0, 0, 0, 150, 0, 0]
    // 创建位置关键帧对象
    const posTrack = new t.KeyframeTrack('Box.position', times, values)
    // 创建颜色关键帧对象
    const c = box.material.color
    const colTrack = new t.KeyframeTrack('Box.material.color', [10, 20], [c.r, c.g, c.b, 0, 0, 1])
    // 创建缩放关键帧对象
    const scaTrack = new t.KeyframeTrack('Ball.scale', [0, 20], [1, 1, 1, 3, 3, 3])
    // 动画持续事件
    const duraction = 20
    const clip = new t.AnimationClip('change', duraction, [posTrack, colTrack, scaTrack])

    // 播放关键帧
    // * 播放编辑好的关键帧数据
    // * /
    // group作为混合器的参数，可以播放group中所有子对象的帧动画
    var mixer = new t.AnimationMixer(group);
    // 剪辑clip作为参数，通过混合器clipAction方法返回一个操作对象AnimationAction
    var AnimationAction = mixer.clipAction(clip);
    //通过操作Action设置播放方式
    AnimationAction.timeScale = 20;//默认1，可以调节播放速度
    // AnimationAction.loop = THREE.LoopOnce; //不循环播放
    AnimationAction.play();//开始播放
    const clock = new t.Clock()
    return () => {
        mixer.update(clock.getDelta())
    }
}, {
    plane: true,
    d_light: true
})