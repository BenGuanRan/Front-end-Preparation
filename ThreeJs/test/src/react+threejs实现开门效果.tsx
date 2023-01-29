import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client';
import init from '@/utils/init'
import { Slider } from 'antd';

function App() {
    const [time, setTime] = useState<number>(0)
    const AnimationAction = useRef<THREE.AnimationAction | null>(null)
    const clip = useRef<THREE.AnimationClip | null>(null)
    useEffect(() => {
        init(({ scene, THREE }) => {
            const door_group = new THREE.Group()
            // 创建一个门框
            const points: THREE.Vector2[] = [
                new THREE.Vector2(-50, 0)
            ]
            const door_frame_shape = new THREE.Shape(points)
            door_frame_shape.lineTo(-100, 0)
            door_frame_shape.lineTo(-100, 200)
            door_frame_shape.lineTo(100, 200)
            door_frame_shape.lineTo(100, 0)
            door_frame_shape.lineTo(50, 0)
            door_frame_shape.lineTo(50, 150)
            door_frame_shape.lineTo(-50, 150)
            // door_frame_shape.lineTo(50, 0)
            const door_frame_geometry = new THREE.ExtrudeGeometry(door_frame_shape, {
                steps: 2,
                depth: 16,
                bevelEnabled: true,
                bevelThickness: 1,
                bevelSize: 1,
                bevelOffset: 0,
                bevelSegments: 1
            });
            const door_frame = new THREE.Mesh(door_frame_geometry, new THREE.MeshPhongMaterial({
                color: 0xffccee,
                // side: THREE.DoubleSide,
                // wireframe: true
            }))
            door_frame.castShadow = true
            door_group.add(door_frame)
            // 定义一个门
            const door_geometry = new THREE.BoxGeometry(100, 150, 10)
            const door = new THREE.Mesh(door_geometry, new THREE.MeshPhongMaterial({
                color: 0xfae186,
                // wireframe: true
            }))
            door.castShadow = true
            door.position.set(0, 75, 8)
            door.name = 'DOOR'
            door_group.add(door)
            scene.add(door_group)
            // 定义动画
            const door_track = new THREE.KeyframeTrack('DOOR.rotation[y]', [0, 3], [0, Math.PI / 2])
            clip.current = new THREE.AnimationClip('OPEN_THE_DOOR', 3, [door_track]) as THREE.AnimationClip
            const mixer = new THREE.AnimationMixer(door_group)
            const clock = new THREE.Clock()
            AnimationAction.current = mixer.clipAction(clip.current) as THREE.AnimationAction;
            AnimationAction.current.loop = THREE.LoopOnce;
            AnimationAction.current.clampWhenFinished = true; //暂停在最后一帧播放的状态
            // AnimationAction.current.play();//开始播放
            return () => {
                mixer.update(clock.getDelta())
            }
        }, {
            axesHelper: true,
            d_light: true,
            plane: true
        })
    }, [])
    useEffect(() => {
        if (AnimationAction.current && clip.current) {
            // 开始结束时间设置为一样，相当于播放时间为0，直接跳转到时间点对应的状态
            AnimationAction.current.time = time; //操作对象设置开始播放时间
            clip.current.duration = AnimationAction.current.time;//剪辑对象设置播放结束时间
            AnimationAction.current.play(); //开始播放
        }

    }, [time])
    return <div>
        <Slider onChange={(newValue: number) => setTime(newValue)} step={0.1} value={time} min={0} max={3} />
    </div >
}
const root = ReactDOM.createRoot(document.getElementById("app")!);
root.render(<App />);