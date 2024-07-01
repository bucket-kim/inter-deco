import { Canvas } from "@react-three/fiber";
import Blog from "./BlogModel/Blog";
import Light from "./Light/Light";
import Decoration from "./Mesh/Decoration/Decoration";
import Mesh from "./Mesh/Mesh";
import Texts from "./Mesh/Texts/Texts";
import R3FStyleContainer from "./R3FStyleContainer";

const R3F = () => {
  return (
    <R3FStyleContainer>
      <Canvas shadows camera={{ fov: 35, position: [0, 0, 11.5] }}>
        {/* <OrbitControls /> */}
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
        <Texts />
        <Blog />
        <Mesh />
        <Decoration />
      </Canvas>
    </R3FStyleContainer>
  );
};

export default R3F;
