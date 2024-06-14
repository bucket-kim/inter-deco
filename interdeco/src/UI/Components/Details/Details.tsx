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
}

const Details: FC<DetailsProps> = ({ datas }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const readRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const { setBlogId } = useGlobalState((state) => {
    return {
      setBlogId: state.setBlogId,
    };
  }, shallow);

  const handleClick = (post: any) => {
    setBlogId(post._id);
  };

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
        onSlideChange={(swiper) => {
          setIsAnimating(true);
          const timeout = setTimeout(() => {
            setIsAnimating(false);
            setActiveSlide(swiper.activeIndex);
          }, 300);

          return () => clearTimeout(timeout);
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {/* {Array.from({ length: 4 }).map((_: any, idx: number) => (
          <SwiperSlide key={idx} className="container">
            <div className="content-container"></div>
          </SwiperSlide>
        ))} */}
        {datas.map((post: any, idx: number) => (
          <SwiperSlide key={idx} className="container">
            <div className="content-container">
              <h2>{post.title}</h2>
              <div className="img-container">
                <img src={post.imageUrl} alt={post.title} />
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

                {/* <p>ID: {post.episode}</p> */}
                <p>ID: {post._id.substring(19, 24)}</p>

                <small>
                  {new Date(post.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }, [datas]);

  return <DetailsStyleContainer>{memoizeData}</DetailsStyleContainer>;
};

export default Details;
