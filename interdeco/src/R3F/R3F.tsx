import { Canvas } from "@react-three/fiber";
import Light from "./Light/Light";
import Meshes from "./Mesh/Meshes/Meshes";
import R3FStyleContainer from "./R3FStyleContainer";

const R3F = () => {
  return (
    <R3FStyleContainer>
      <Canvas shadows camera={{ fov: 35, position: [0, 0, 11.5] }}>
        {/* <OrbitControls /> */}
        <Light />
        <Meshes />
      </Canvas>
    </R3FStyleContainer>
  );
};

export default R3F;
