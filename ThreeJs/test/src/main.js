import init from './utils/init'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

init(({ THREE, scene }) => {
    const testLoader = new FontLoader()
    testLoader.load(
        './fonts/helvetiker_bold.typeface.json',
        (font) => {
            const geometry = new TextGeometry('Hello three.js!', {
                font: font,
                size: 80,
                height: 5,
                curveSegments: 200,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelSegments: 5
            });
            const material = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                wireframe: true,
            });
            const hello = new THREE.Mesh(geometry, material)
            scene.add(hello)
        }
    )
})