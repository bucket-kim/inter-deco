import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Blog from "./BlogModel/Blog";
import Light from "./Light/Light";
import Mesh from "./Mesh/Mesh";
import R3FStyleContainer from "./R3FStyleContainer";

const R3F = () => {
  return (
    <R3FStyleContainer>
      <Canvas shadows camera={{ fov: 35, position: [0, 0, 11.5] }}>
        <OrbitControls />
        <Light />
        <group position={[0, -2.55, 0]} name="shadow plane">
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 0]}
            receiveShadow
          >
            <planeGeometry args={[100, 100]} />
            <shadowMaterial transparent opacity={0.4} color={"#a72700"} />
          </mesh>
        </group>
        <Blog />
        <Mesh />
      </Canvas>
    </R3FStyleContainer>
  );
};

export default R3F;
