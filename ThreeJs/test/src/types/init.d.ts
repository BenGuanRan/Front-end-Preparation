/** init callback 参数类型 */
type InitCallbackProps = {
    scene: THREE.Scene,
    camera?: THREE.PerspectiveCamera,
    renderer?: THREE.WebGLRenderer,
    controls?: OrbitControls,
    THREE: THREE,
}
/** init options 参数类型 */
type InitOptionsProps = {
    axesHelper?: boolean,
    plane?: boolean,
    d_light?: boolean
}
