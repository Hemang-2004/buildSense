"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Cylinder } from "@react-three/drei"
import type { Group } from "three"

export function ConstructionSite() {
  const groupRef = useRef<Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      // groupRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      {/* Ground */}
      <Box args={[30, 0.5, 30]} position={[0, -0.25, 0]}>
        <meshStandardMaterial color="#666666" />
      </Box>

      {/* Building Foundation */}
      <Box args={[10, 0.5, 10]} position={[0, 0.25, 0]}>
        <meshStandardMaterial color="#999999" />
      </Box>

      {/* Columns */}
      {[
        [-4, -4],
        [4, -4],
        [-4, 4],
        [4, 4],
      ].map(([x, z], index) => (
        <Cylinder key={index} args={[0.5, 0.5, 8]} position={[x, 4, z]}>
          <meshStandardMaterial color="#cccccc" />
        </Cylinder>
      ))}

      {/* Crane Base */}
      <Box args={[2, 1, 2]} position={[-8, 0.5, -8]}>
        <meshStandardMaterial color="#ff4444" />
      </Box>

      {/* Crane Tower */}
      <Cylinder args={[0.3, 0.3, 15]} position={[-8, 8, -8]}>
        <meshStandardMaterial color="#ff4444" />
      </Cylinder>

      {/* Crane Arm */}
      <Box args={[12, 0.3, 0.3]} position={[-2, 15, -8]}>
        <meshStandardMaterial color="#ff4444" />
      </Box>
    </group>
  )
}
