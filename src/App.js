import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import './styles.css';

// Tutorial: https://www.youtube.com/watch?v=9ZEjSxDRIik

function Box() {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 2, 0]
  }));
  return (
    <mesh onClick={() => {
      api.velocity.set(0, 2, 0);
    }} ref={ref} position={[0, 2, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],

  }));
  return (
    <mesh ref={ref} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[100, 100, 0]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  )
}

export default function App() {
  return (
    <>
      <div>
        Hello World!
      </div>
      <Canvas>
        <OrbitControls />
        <Stars/>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <Plane />
          <Box/>
        </Physics>
        
      </Canvas>
    </>
  );
}
