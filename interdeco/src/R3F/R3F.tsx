import { RoundedBox } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Light from "./Light/Light";
import R3FStyleContainer from "./R3FStyleContainer";

const R3F = () => {
  return (
    <R3FStyleContainer>
      <Canvas shadows>
        <Light />
        <group position={[0, -2.55, 0]}>
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 0]}
            receiveShadow
          >
            <planeGeometry args={[100, 100]} />
            <shadowMaterial transparent opacity={0.4} />
          </mesh>
        </group>
        <RoundedBox
          receiveShadow
          castShadow
          args={[1.4, 1, 0.2]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.05} // Radius of the rounded corners. Default is 0.05
          smoothness={4} // The number of curve segments. Default is 4
          bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
          position={[0, 0, 0]}
          material={
            new THREE.MeshStandardMaterial({
              color: "#dcdcdc",
            })
          }
          scale={[5, 5, 2]}
        />
      </Canvas>
    </R3FStyleContainer>
  );
};

export default R3F;
