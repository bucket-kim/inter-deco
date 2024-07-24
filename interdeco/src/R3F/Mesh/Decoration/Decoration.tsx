import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { decorationData } from "./config";

type GLTFResult = GLTF & {
  nodes: {
    blueGrass: THREE.Mesh;
    orangeGrass: THREE.Mesh;
    bowl_orange_geo: THREE.Mesh;
    bowl_white_geo: THREE.Mesh;
    stem001: THREE.Mesh;
    stem002: THREE.Mesh;
    stem003: THREE.Mesh;
    grass001: THREE.Mesh;
    grass002: THREE.Mesh;
    grass003: THREE.Mesh;
  };
};

const Decoration = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF("/models/decoration.glb") as unknown as GLTFResult;
  const { width: w } = useThree((state) => state.size);

  const groupRef = useRef<THREE.Group>(null);
  const bushRef = useRef<THREE.Group>(null);
  const bowlRef = useRef<THREE.Group>(null);
  const flower001 = useRef<THREE.Group>(null);
  const flower002 = useRef<THREE.Group>(null);
  const flower003 = useRef<THREE.Group>(null);

  const material = new THREE.MeshStandardMaterial({
    color: "#ffffff",
  });
  const blueMaterial = new THREE.MeshStandardMaterial({
    color: "#2d79f2",
  });
  const orangeMaterial = new THREE.MeshStandardMaterial({
    color: "#eb4123",
  });

  useFrame((state) => {
    if (
      !bushRef.current ||
      !bowlRef.current ||
      !flower001.current ||
      !flower002.current ||
      !flower003.current
    )
      return;
    const time = state.clock.getElapsedTime();

    bowlRef.current.rotation.z = Math.sin(time) * 0.15 + 0.2;
    flower001.current.rotation.z = Math.sin(time - 1) * 0.05 + 0.2;
    flower002.current.rotation.z = Math.sin(time - 1.2) * 0.05 + 0.2;
    flower003.current.rotation.z = Math.sin(time - 1.4) * 0.05 + 0.2;

    bushRef.current.children.map((child: any, key: number) => {
      child.rotation.z =
        Math.cos(time - (key / 10 + 1)) * 0.001 + child.rotation.z;
    });
  });

  useEffect(() => {
    if (!groupRef.current) return;
    if (w < 440) {
      groupRef.current.position.x = 1.5;
    } else if (w <= 1024) {
      groupRef.current.position.x = 3.5;
    } else {
      groupRef.current.position.x = 3.5;
    }
  }, [w]);

  return (
    <group {...props} dispose={null}>
      <group position={[3.5, -2.5, 2]} scale={0.4} ref={groupRef}>
        <group ref={flower001}>
          <mesh
            name="stem001"
            castShadow
            receiveShadow
            material={blueMaterial}
            geometry={nodes.stem001.geometry}
            userData={{ name: "stem001" }}
          />
          <mesh
            name="grass001"
            castShadow
            receiveShadow
            material={orangeMaterial}
            geometry={nodes.grass001.geometry}
            userData={{ name: "grass001" }}
          />
        </group>
        <group ref={flower002}>
          <mesh
            name="stem002"
            castShadow
            receiveShadow
            material={blueMaterial}
            geometry={nodes.stem002.geometry}
            userData={{ name: "stem002" }}
          />
          <mesh
            name="grass002"
            castShadow
            receiveShadow
            material={orangeMaterial}
            geometry={nodes.grass002.geometry}
            userData={{ name: "grass002" }}
          />
        </group>
        <group ref={flower003}>
          <mesh
            name="stem003"
            castShadow
            receiveShadow
            material={blueMaterial}
            geometry={nodes.stem003.geometry}
            userData={{ name: "stem003" }}
          />
          <mesh
            name="grass003"
            castShadow
            receiveShadow
            material={orangeMaterial}
            geometry={nodes.grass003.geometry}
            userData={{ name: "grass003" }}
          />
        </group>
        <group rotation={[0, 0, 0.2]} ref={bowlRef}>
          <mesh
            name="bowl_orange_geo"
            castShadow
            receiveShadow
            material={orangeMaterial}
            geometry={nodes.bowl_orange_geo.geometry}
            userData={{ name: "bowl_orange_geo" }}
          />
          <mesh
            name="bowl_white_geo"
            castShadow
            receiveShadow
            material={material}
            geometry={nodes.bowl_white_geo.geometry}
            userData={{ name: "bowl_white_geo" }}
          />
        </group>
      </group>
      <group position={[-1.3, -2.55, 2]} scale={0.25} ref={bushRef}>
        {decorationData.map((data: any, key: number) => (
          <group
            key={key}
            position={data.position}
            rotation={data.rotation}
            scale={data.scale}
          >
            <mesh
              name="blueGrass"
              castShadow
              receiveShadow
              material={blueMaterial}
              geometry={nodes.blueGrass.geometry}
              userData={{ name: "blueGrass" }}
            />
            <mesh
              name="orangeGrass"
              castShadow
              receiveShadow
              material={orangeMaterial}
              geometry={nodes.orangeGrass.geometry}
              userData={{ name: "orangeGrass" }}
            />
          </group>
        ))}
      </group>
    </group>
  );
};

export default Decoration;

useGLTF.preload("/models/decoration.glb");
