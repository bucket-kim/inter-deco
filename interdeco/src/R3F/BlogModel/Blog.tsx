import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const Blog = ({ ...props }: any) => {
  return (
    <group {...props}>
      <RoundedBox
        receiveShadow
        castShadow
        args={[1.4, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.05} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        position={[0, 0, -0.25]}
        material={
          new THREE.MeshStandardMaterial({
            color: "#f95f44",
          })
        }
        scale={[5, 5, 1]}
      />
      <RoundedBox
        receiveShadow
        castShadow
        args={[1.4, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.03} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        position={[0, 0, 0.3]}
        material={
          new THREE.MeshStandardMaterial({
            color: "#f2f2f2",
          })
        }
        scale={[4.5, 4.4, 0.2]}
      />
    </group>
  );
};

export default Blog;
