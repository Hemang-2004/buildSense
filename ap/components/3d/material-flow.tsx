"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import type { Group } from "three"

function MaterialFlow() {
  const groupRef = useRef<Group | null>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // groupRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2 + 2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Material Flow Indicators */}
      {[
        [-6, -6],
        [-3, -3],
        [0, 0],
        [3, 3],
      ].map(([x, z], index) => (
        <Sphere key={index} args={[0.2]} position={[x, 0, z]}>
          <meshStandardMaterial color="#44aaff" transparent opacity={0.6} />
        </Sphere>
      ))}
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <MaterialFlow />
    </Canvas>
  )
}
