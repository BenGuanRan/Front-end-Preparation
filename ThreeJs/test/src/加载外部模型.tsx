import init from '@/utils/init'
init(async ({ scene, THREE }) => {
    const geometry_loader: THREE.ObjectLoader = new THREE.ObjectLoader()
    function loadBox() {
        return new Promise((resolve, reject) => {
            geometry_loader.load('./assets/models/box.json', function (data) {
                resolve(data)
            }, undefined, (err) => {
                reject(err)
            })
        })
    }
    const box_geometry = await loadBox() as THREE.Object3D
    scene.add(box_geometry)
    console.log(box_geometry);


    const material_loader: THREE.MaterialLoader = new THREE.MaterialLoader();
    material_loader.load('./assets/models/box_material.json', function (data) {
        console.log(data);
    })

    return () => {

    }
})