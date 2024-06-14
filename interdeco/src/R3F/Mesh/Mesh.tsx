import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const Mesh = ({ ...props }: any) => {
  const material = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    metalness: 0,
    roughness: 0.2,
  });

  return (
    <group {...props}>
      <Sphere
        position={[-3.75, 0, 0.8]}
        castShadow
        receiveShadow
        scale={0.5}
        material={material}
      />
      <Sphere
        position={[-4, -0.5, 1.5]}
        castShadow
        receiveShadow
        scale={0.25}
        material={material}
      />
      <Sphere
        position={[-4.2, 2.5, -0.25]}
        castShadow
        receiveShadow
        scale={0.3}
        material={material}
      />
      <Sphere
        position={[4, 3, -1.5]}
        castShadow
        receiveShadow
        scale={0.8}
        material={material}
      />
    </group>
  );
};

export default Mesh;
