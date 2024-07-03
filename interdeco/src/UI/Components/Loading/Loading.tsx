import gsap from "gsap";
import { FC, useEffect, useRef } from "react";
import LoadingStyleContainer from "./LoadingStyleContainer";

interface LoadingProps {
  isLoading: boolean;
}

const Loading: FC<LoadingProps> = ({ isLoading }) => {
  const loadingDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loadingDivRef.current) return;
    if (!isLoading) {
      gsap.to(loadingDivRef.current, {
        opacity: 0,
        onComplete: () => {
          if (!loadingDivRef.current) return;
          loadingDivRef.current.style.visibility = "hidden";
        },
      });
    }
  }, [isLoading]);

  useEffect(() => {
    const spanTag = document.querySelectorAll("span");
    const dotTimeline = gsap.timeline({ paused: true });
    dotTimeline
      .to(spanTag, {
        stagger: 0.25,
        opacity: 0,
        ease: "steps(1)",
      })
      .to(spanTag, {
        opacity: 1,
        stagger: 0.25,
        ease: "steps(1)",
      });
    dotTimeline.repeat(-1);
    dotTimeline.play();
    return () => {
      dotTimeline.kill();
    };
  }, []);

  return (
    <LoadingStyleContainer ref={loadingDivRef}>
      <p>
        Posts Loading
        {Array.from({ length: 3 }).map((_, key: number) => (
          <span key={key}>.</span>
        ))}
      </p>
    </LoadingStyleContainer>
  );
};

export default Loading;
