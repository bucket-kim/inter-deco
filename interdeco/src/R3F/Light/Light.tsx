import { Environment, SoftShadows } from "@react-three/drei";
import { Fragment } from "react";

const Light = () => {
  return (
    <Fragment>
      {/* <pointLight position={[-3, 2, 5]} color="white" intensity={10} /> */}
      <pointLight position={[3.5, 2, 3]} intensity={20} />
      <directionalLight
        castShadow
        position={[1, 8, 0.1]}
        intensity={1.5}
        shadow-mapSize={1024}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </directionalLight>
      <ambientLight intensity={0.5} />
      <Environment preset="warehouse" />
      <SoftShadows size={25} samples={50} />
    </Fragment>
  );
};

export default Light;
