/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
// @ts-expect-error maath types are missing
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props: any) => {
  const ref = useRef<any>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 }),
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const InteractiveShape = () => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime();
    const scrollY = window.scrollY;

    // Rotation based on time and scroll
    meshRef.current.rotation.x = t * 0.2 + scrollY * 0.0005;
    meshRef.current.rotation.y = t * 0.3 + scrollY * 0.0005;

    // Subtle floating movement separate from scroll
    meshRef.current.position.y = Math.sin(t / 1.5) * 0.2;
  });

  return (
    <group position={[1.5, 0, 0]}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshNormalMaterial wireframe opacity={0.3} transparent />
        </mesh>
      </Float>
    </group>
  );
};

const Background3D = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        opacity: 0.8,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <InteractiveShape />
      </Canvas>
    </div>
  );
};

export default Background3D;
