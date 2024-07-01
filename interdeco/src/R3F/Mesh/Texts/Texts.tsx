import { Center, Text3D } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

const Texts = () => {
  const { width: w } = useThree((state) => state.size);
  const groupRef = useRef<Group>(null);

  // useEffect(() => {
  //   if (!groupRef.current) return;
  //   if (w < 440) {
  //     groupRef.current.scale.set(0.3, 0.3, 0.3);
  //   } else {
  //     groupRef.current.scale.set(0.5, 0.5, 0.2);
  //   }
  // }, [w]);

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
