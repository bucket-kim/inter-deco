import { Float, Sphere } from "@react-three/drei";
import * as THREE from "three";

const Mesh = ({ ...props }: any) => {
  const material = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    metalness: 0,
    roughness: 0.2,
  });

  type SphereObjectType = {
    position: [number, number, number];
    scale: number;
  };

  const sphereObject: SphereObjectType[] = [
    { position: [-3.75, 0, 0.8], scale: 0.5 },
    { position: [-4, -0.5, 1.8], scale: 0.25 },
    { position: [-4.2, 2.1, -0.25], scale: 0.3 },
    { position: [4, 2.8, -1.5], scale: 0.8 },
  ];

  return (
    <group {...props}>
      {sphereObject.map((obj, idx) => (
        <Float
          key={idx}
          floatIntensity={1}
          rotationIntensity={0.75}
          // floatingRange={[1, 0.5]}
        >
          <Sphere
            position={obj.position}
            castShadow
            receiveShadow
            scale={obj.scale}
            material={material}
          />
        </Float>
      ))}
    </group>
  );
};

export default Mesh;
