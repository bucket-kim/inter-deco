import { useRef } from "react";
import { Group } from "three";
import Blog from "../../BlogModel/Blog";
import Decoration from "../Decoration/Decoration";
import Floor from "../Floor/Floor";
import Mesh from "../Mesh";
import Texts from "../Texts/Texts";

const Meshes = () => {
  const groupRef = useRef<Group>(null);

  return (
    <group ref={groupRef}>
      <Floor />
      <Texts />
      <Blog />
      <Mesh />
      <Decoration />
    </group>
  );
};

export default Meshes;
