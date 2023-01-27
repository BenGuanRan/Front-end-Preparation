import init from '@/utils/init'
init(({ scene, THREE }) => {
    // 加载一个雨滴纹理
    const textureTree = new THREE.TextureLoader().load("./images/rain.png");
    // 创建一个组
    const rainGroup = new THREE.Group()
    for (let i = 0; i < 4000; i++) {
        var spriteMaterial = new THREE.SpriteMaterial({
            map: textureTree,//设置精灵纹理贴图
        });
        // 创建精灵模型对象
        var sprite = new THREE.Sprite(spriteMaterial);
        // 控制精灵大小,
        sprite.scale.set(8, 10, 1); //// 只需要设置x、y两个分量就可以
        var k1 = Math.random() - 0.5;
        var k2 = Math.random() - 0.5;
        var k3 = Math.random() - 0.5;
        // 设置精灵模型位置，在整个空间上上随机分布
        sprite.position.set(2000 * k1, 2000 * k3, 2000 * k2)
        rainGroup.add(sprite);
    }
    scene.add(rainGroup)
    return () => {
        // 每次渲染遍历雨滴群组，刷新频率30~60FPS，两帧时间间隔16.67ms~33.33ms
        // 每次渲染都会更新雨滴的位置，进而产生动画效果
        rainGroup.children.forEach((sprite: THREE.Sprite) => {
            // 雨滴的y坐标每次减1
            sprite.position.y -= 1;
            if (sprite.position.y < -200) {
                // 如果雨滴落到地面，重置y，从新下落
                sprite.position.y = 200;
            }
        });

    }
})  