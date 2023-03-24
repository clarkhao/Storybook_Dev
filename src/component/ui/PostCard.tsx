//应用
import React, { useRef, Suspense } from "react";
//style
import style from "./PostCard.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import CardLayout from "../layout/CardLayout";
import Image from "next/image";
import {FiHeart} from 'react-icons/fi';

type TPostCardData = {
  url: string;
  words: string;
  name: string;
};
type TPostCard = {
  /**
   * size
   */
  size: number;
  /**
   * data from parent
   */
  data?: TPostCardData;
};

function PostCardSkeleton({ size }: { size: number }) {
  return (
    <div
      className="skeleton"
      css={css`
        --image_skeleton_width: ${size}px;
      `}
    ></div>
  );
}

function PostCard({ size = 300, data, ...props }: TPostCard) {
  const Avatar = React.lazy(() => import("./Avatar"));
  const [avartaData, setAvartaData] = React.useState({ url: "", words: "", name: '' });
  const [isLoading, setLoaded] = React.useState(true);
  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((json) => {
        const { message, status } = json;
        if (status === "success") {
          setAvartaData({
            ...avartaData,
            url: message,
            words: "美好的一天美好的一天美好的一天美好的一天",
            name: 'hello world'
          });
        }
      });
  }, []);
  return (
    <>
      <CardLayout height="auto" width={`${size}px`}>
        <div className={isLoading ? style.image : ""}>
          {avartaData.url === "" ? (
            <PostCardSkeleton size={size} />
          ) : (
            <img
              src={avartaData.url}
              alt="dog"
              width={size}
              height="auto"
              loading="lazy"
              decoding="auto"
              onLoad={(e) => {
                setLoaded(false);
              }}
            />
          )}
        </div>
        <div className={style.caption}>
          {avartaData?.words !== "" ? (
            avartaData?.words
          ) : (
            <div
              className="skeleton"
              style={{ width: `${size}px`, height: `20px` }}
            ></div>
          )}
          <footer className={style.footer}>
            <div className={style.avarta}>
            <Suspense fallback={<div>...loading</div>}>
              <Avatar size={40} />
            </Suspense>
            <p>{avartaData.name}</p>
            </div>
            <FiHeart />
          </footer>
        </div>
      </CardLayout>
    </>
  );
}

export default PostCard;
