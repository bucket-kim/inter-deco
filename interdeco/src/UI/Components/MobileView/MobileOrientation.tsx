import { useEffect, useState } from "react";

const MobileOrientation = () => {
  const [orientation, setOrientation] = useState(
    window.innerWidth > window.innerHeight ? "landscape" : "portrait",
  );

  const handleOrientationChange = () => {
    setOrientation(
      window.innerWidth > window.innerHeight ? "landscape" : "portrait",
    );
  };

  useEffect(() => {
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);
  return orientation;
};

export default MobileOrientation;
