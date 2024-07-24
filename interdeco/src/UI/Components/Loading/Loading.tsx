import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { FC, useEffect, useRef } from "react";
import LoadingStyleContainer from "./LoadingStyleContainer";

const Loading: FC = () => {
  const loadingDivRef = useRef<HTMLDivElement>(null);

  const { progress } = useProgress();

  useEffect(() => {
    const dotContainer = document.querySelector(".dot-container");
    if (progress >= 100) {
      gsap.to(dotContainer, {
        opacity: 0,
        onComplete: () => {
          gsap.to(loadingDivRef.current, {
            delay: 0.5,
            opacity: 0,
            onComplete: () => {
              if (!loadingDivRef.current) return;
              loadingDivRef.current.style.visibility = "hidden";
            },
          });
        },
      });
    }
  }, [progress]);

  useEffect(() => {
    const dotTag = document.querySelectorAll(".dots");
    const dotTimeline = gsap.timeline({ paused: true });
    dotTimeline
      .to(dotTag, {
        stagger: 0.25,
        opacity: 0,
        ease: "power1.inOut",
      })
      .to(dotTag, {
        opacity: 1,
        stagger: 0.25,
        ease: "power1.inOut",
      });
    dotTimeline.repeat(-1);
    dotTimeline.play();
    return () => {
      dotTimeline.kill();
    };
  }, []);

  return (
    <LoadingStyleContainer ref={loadingDivRef}>
      <div className="loading-container">
        <div className="dot-container">
          {Array.from({ length: 3 }).map((_, key: number) => (
            <div className="dots" key={key} />
          ))}
        </div>
      </div>
    </LoadingStyleContainer>
  );
};

export default Loading;
