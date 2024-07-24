const Floor = () => {
  return (
    <group position={[0, -2.55, 0]} name="shadow plane">
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.4} color={"#a72700"} />
      </mesh>
    </group>
  );
};

export default Floor;
