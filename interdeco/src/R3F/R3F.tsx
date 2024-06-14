import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import R3FStyleContainer from "./R3FStyleContainer";

const R3F = () => {
  return (
    <R3FStyleContainer>
      <Canvas>
        {/* <OrbitControls /> */}
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} />
        <ambientLight intensity={0.4} />
        {/* <BlogModel /> */}
        <Environment preset="warehouse" />

        {/* <RoundedBox
          args={[1, 1, 0.1]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.05} // Radius of the rounded corners. Default is 0.05
          smoothness={4} // The number of curve segments. Default is 4
          bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
          position={[0, -1.5, -0.5]}
          scale={2}
        >
          <meshStandardMaterial color="#f3f3f3" />
        </RoundedBox>
        <RoundedBox
          args={[1, 1, 0.1]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.05} // Radius of the rounded corners. Default is 0.05
          smoothness={4} // The number of curve segments. Default is 4
          bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
          position={[0, 1.5, -0.5]}
          scale={2}
        >
          <meshStandardMaterial color="#f3f3f3" />
        </RoundedBox> */}
      </Canvas>
    </R3FStyleContainer>
  );
};

export default R3F;
