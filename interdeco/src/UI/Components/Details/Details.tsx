import gsap from "gsap";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../state/useGlobalState";
import DetailsStyleContainer from "./DetailsStyleContainer";

interface DetailsProps {
  datas: any;
  isLoading: boolean;
}

const Details: FC<DetailsProps> = ({ datas }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const readRef = useRef<(HTMLParagraphElement | null)[]>([]);

  const detailsRef = useRef<HTMLDivElement>(null);

  const { setBlogId } = useGlobalState((state) => {
    return {
      setBlogId: state.setBlogId,
    };
  }, shallow);

  const handleClick = (post: any) => {
    setBlogId(post.id);
  };

  // useEffect(() => {
  //   if (!detailsRef.current) return;
  //   if (isLoading === false) {
  //     gsap.fromTo(
  //       detailsRef.current,
  //       { scale: 0, transformOrigin: "center center" },
  //       {
  //         scale: 1,
  //         duration: 0.3,
  //       },
  //     );
  //   }
  // }, [isLoading]);

  useEffect(() => {
    readRef.current.forEach((ref, idx: number) => {
      if (!ref) return;
      gsap.to(ref, {
        scale: hovered === idx ? 1.125 : 1,
        duration: 0.4,
      });
    });
  }, [hovered]);

  const memoizeData = useMemo(() => {
    return (
      <Swiper
        spaceBetween={10}
        navigation={true}
        // loop={true}
        // onSlideChange={(swiper) => {
        //   setIsAnimating(true);
        //   const timeout = setTimeout(() => {
        //     setIsAnimating(false);
        //     setActiveSlide(swiper.activeIndex);
        //   }, 300);

        //   return () => clearTimeout(timeout);
        // }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {datas.map((post: any, idx: number) => (
          <SwiperSlide
            key={idx}
            className="container"
            onClick={() => handleClick(post)}
          >
            <div className="content-container">
              <h2>{post.title}</h2>
              <div className="img-container">
                <img src={post.image} alt={post.title} />
              </div>
              {/* <p>
            {post.content.length > 30
              ? post.content.substring(0, 76) + "..."
              : post.content}
          </p> */}
              <div className="footer-container">
                <p
                  ref={(el) => (readRef.current[idx] = el)}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick(post)}
                  onPointerEnter={() => setHovered(idx)}
                  onPointerOut={() => setHovered(null)}
                >
                  read s'more
                </p>

                <p>EP: {post.episode}</p>
                {/* <p>ID: {post.id.substring(19, 24)}</p> */}

                <small>
                  {new Date(post.createdAt.seconds * 1000).toLocaleDateString(
                    undefined,
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }, [datas]);

  return (
    <DetailsStyleContainer ref={detailsRef}>
      {memoizeData}
    </DetailsStyleContainer>
  );
};

export default Details;
