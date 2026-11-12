'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder, Html } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function VendingMachine({ dispensing }: { dispensing: boolean }) {
  const medicineRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (dispensing && medicineRef.current) {
      if (medicineRef.current.position.y > -1.5) {
        medicineRef.current.position.y -= delta * 2;
      }
    } else if (!dispensing && medicineRef.current) {
      medicineRef.current.position.set(0, 1, 0); // Reset position
    }
  });

  return (
    <group>
      {/* Machine Body */}
      <Box args={[3, 5, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#E2E8F0" roughness={0.2} metalness={0.8} />
      </Box>
      
      {/* Screen */}
      <Box args={[1.2, 0.8, 0.1]} position={[0.6, 1, 1.01]}>
        <meshStandardMaterial color="#000000" emissive="#0A192F" emissiveIntensity={0.5} />
      </Box>

      {/* Glass Front */}
      <Box args={[1.5, 3, 0.1]} position={[-0.5, 0.2, 1.01]}>
        <meshPhysicalMaterial color="#8892B0" transparent opacity={0.3} transmission={0.9} roughness={0.1} />
      </Box>
      
      {/* Collection Tray */}
      <Box args={[1.5, 0.6, 0.5]} position={[-0.5, -2, 1]}>
        <meshStandardMaterial color="#334155" />
      </Box>

      {/* Simulated Medicine Item */}
      <Box ref={medicineRef} args={[0.3, 0.3, 0.3]} position={[0, 1, 0.8]}>
        <meshStandardMaterial color="#64FFDA" />
      </Box>
    </group>
  );
}

export default function Machine3D({ dispensing }: { dispensing: boolean }) {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-5, 5, 5]} intensity={0.8} />
      
      <VendingMachine dispensing={dispensing} />
      
      <OrbitControls 
        enablePan={false}
        minPolarAngle={Math.PI/4}
        maxPolarAngle={Math.PI/2 + 0.2}
      />
    </Canvas>
  );
}
