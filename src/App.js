import { Canvas } from '@react-three/fiber'
import { CameraControls, Environment, MeshTransmissionMaterial } from '@react-three/drei'
import { Splat } from './splat'

export default function App() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 6, -1], fov: 50 }}>
      <color attach="background" args={['#151520']} />
      <Splat scale={6} rotation={[0, Math.PI, 0]} src="hyasintti.splat" />
  <Splat scale={6} position={[3,0,0]} rotation={[0, Math.PI, 0]} src="hyasintti.splat" />

      <Environment preset="apartment" />
      <CameraControls />
    </Canvas>
  )
}
