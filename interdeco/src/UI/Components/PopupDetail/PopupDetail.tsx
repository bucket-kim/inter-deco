import gsap from "gsap";
import { FC, useCallback, useEffect, useMemo, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../state/useGlobalState";
import PopupDetailStyleContainer from "./PopupDetailStyleContainer";

interface Post {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

interface PopupDetailProps {
  datas: Post[];
}

const PopupDetail: FC<PopupDetailProps> = ({ datas }) => {
  const { blogId, setBlogId } = useGlobalState((state) => {
    return {
      blogId: state.blogId,
      setBlogId: state.setBlogId,
    };
  }, shallow);

  const popupRef = useRef<HTMLDivElement>(null);

  const details = useMemo(() => {
    return datas.find((post) => post.id.toString() === blogId || null);
  }, [blogId, datas]);

  useEffect(() => {
    if (!popupRef.current) return;

    if (blogId !== "" && details !== null) {
      gsap.to(popupRef.current, {
        opacity: 1,
        visibility: "visible",
      });
    }
  }, [blogId, details]);

  const handleCloseClick = useCallback(() => {
    if (!popupRef.current) return;
    gsap.to(popupRef.current, {
      opacity: 0,
      onComplete: () => {
        if (!popupRef.current) return;
        popupRef.current.style.visibility = "hidden";
        setBlogId("");
      },
    });
  }, []);

  if (!details) return <div>Loading...</div>;

  return (
    <PopupDetailStyleContainer ref={popupRef}>
      <div className="popup-container">
        <div className="header">
          <button onClick={handleCloseClick}>X</button>
        </div>
        <div className="contents">
          <div className="img-container">
            <img src={details.image} alt={details.title} />
          </div>
          <div className="content-paragraph">
            <h1>{details.title}</h1>
            <p>{details.content}</p>
          </div>
        </div>
      </div>
    </PopupDetailStyleContainer>
  );
};

export default PopupDetail;
