import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

const App = () => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }} >
      <Experience/>
    </Canvas>
  )
}

export default App