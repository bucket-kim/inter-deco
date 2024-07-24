import gsap from "gsap";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import MobileOrientation from "./MobileOrientation";
import MobileViewStyleContainer from "./MobileViewStyleContainer";

const MobileView = () => {
  const mobileDivRef = useRef<HTMLDivElement>(null);

  const orientation = MobileOrientation();

  useEffect(() => {
    if (!mobileDivRef.current) return;

    if (isMobile && orientation === "portrait") {
      gsap.to(mobileDivRef.current, {
        opacity: 1,
        visibility: "visible",
      });
    } else {
      gsap.to(mobileDivRef.current, {
        opacity: 0,
        onComplete: () => {
          if (!mobileDivRef.current) return;
          mobileDivRef.current.style.visibility = "hidden";
        },
      });
    }
  }, [orientation]);

  return (
    <MobileViewStyleContainer ref={mobileDivRef}>
      <h1>For better experience try landscape mode</h1>
    </MobileViewStyleContainer>
  );
};

export default MobileView;
