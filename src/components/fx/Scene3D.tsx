import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const scrollProgress = () =>
  window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)

function Core() {
  const group = useRef<THREE.Group>(null)
  const inner = useRef<THREE.Mesh>(null)

  useFrame(({ pointer, clock }, delta) => {
    if (!group.current || !inner.current) return
    const p = scrollProgress()
    const t = clock.getElapsedTime()

    group.current.rotation.y += delta * 0.12
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * 0.35 + p * Math.PI, 0.05)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -pointer.x * 0.25, 0.05)
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, 2.4 - p * 4.8, 0.04)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, 0.2 - p * 1.2, 0.04)
    group.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.025)
    inner.current.rotation.y -= delta * 0.35
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#5ec8ff" wireframe transparent opacity={0.28} />
      </mesh>
      <points>
        <icosahedronGeometry args={[1.7, 1]} />
        <pointsMaterial color="#9fe4ff" size={0.05} transparent opacity={0.9} />
      </points>
      <mesh ref={inner}>
        <octahedronGeometry args={[0.85, 0]} />
        <meshBasicMaterial color="#8b7bff" wireframe transparent opacity={0.45} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.006, 8, 160]} />
        <meshBasicMaterial color="#5ec8ff" transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[Math.PI / 2.6, 0.4, 0]}>
        <torusGeometry args={[2.9, 0.004, 8, 160]} />
        <meshBasicMaterial color="#8b7bff" transparent opacity={0.25} />
      </mesh>
    </group>
  )
}

function Starfield({ count = 1400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    // seeded PRNG keeps render pure and the field stable between renders
    let seed = 42
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647) - 0.5
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = rand() * 22
      arr[i * 3 + 1] = rand() * 14
      arr[i * 3 + 2] = rand() * 12 - 3
    }
    return arr
  }, [count])

  useFrame(({ pointer }, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.015
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, scrollProgress() * 3, 0.05)
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, pointer.x * 0.3, 0.03)
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#b9d4ff" size={0.022} sizeAttenuation transparent opacity={0.7} />
    </points>
  )
}

export default function Scene3D() {
  const isSmall = window.innerWidth < 720
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Starfield count={isSmall ? 600 : 1400} />
      <Core />
    </Canvas>
  )
}
