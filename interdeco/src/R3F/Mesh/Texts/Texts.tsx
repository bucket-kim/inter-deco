import { Center, Text3D } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

const Texts = () => {
  const groupRef = useRef<Group>(null);

  return (
    <group position={[0, 2.8, 0]} scale={[0.5, 0.5, 0.2]} ref={groupRef}>
      <Center>
        <Text3D
          font={"/Inter_Bold.json"}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={0.0}
        >
          BLOGs
          <meshStandardMaterial color={"#ffffff"} toneMapped={false} />
        </Text3D>
      </Center>
    </group>
  );
};

export default Texts;
