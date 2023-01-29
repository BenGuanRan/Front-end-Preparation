import init from '@/utils/init'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

init(async ({ scene, THREE }) => {
    const obj_loader = new OBJLoader()
    function loadSkeleton() {
        return new Promise((resolve, reject) => {
            obj_loader.load('./assets/models/Le_Transi_De_Rene_De_Chalon.obj', (obj) => {
                resolve(obj)
            })
        })
    }
    const skeleton = await loadSkeleton() as THREE.Group
    skeleton.scale.set(0.1, 0.1, 0.1);
    (skeleton.children[0] as THREE.Mesh).material = new THREE.MeshLambertMaterial({
        color: '#a6a6a6',
        wireFrame: true
    })
    skeleton.children[0].castShadow = true
    scene.add(skeleton)
    // const material = 
}, {
    plane: true,
    axesHelper: true,
    d_light: true
})