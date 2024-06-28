import { useGLTF } from "@react-three/drei";
import React from "react";
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

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

const Decoration = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF("/models/decoration.glb") as unknown as GLTFResult;

  const material = new THREE.MeshStandardMaterial({
    color: "#ffffff",
  });
  const blueMaterial = new THREE.MeshStandardMaterial({
    color: "#2d79f2",
  });
  const orangeMaterial = new THREE.MeshStandardMaterial({
    color: "#eb4123",
  });

  return (
    <group {...props} dispose={null}>
      <group position={[3.5, -2.5, 2]} scale={0.4}>
        <group>
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
        <group>
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
        <group>
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
      <group position={[-1.3, -2.55, 2]} scale={0.25}>
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

useGLTF.preload("/models/decoration-transformed.glb");