import gsap from "gsap";
import { useEffect } from "react";
import LoadingStyleContainer from "./LoadingStyleContainer";

const Loading = () => {
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
    <LoadingStyleContainer>
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
