//应用模块
import React, { Fragment } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
//style
import style from "./SignupLeft.module.css";
import { useTheme } from "@mui/material/styles";
import { css } from "@emotion/react";
//组件
import Mark from "../../ui/Mark";

type TSignupLeft = {
  /**
   * url for lottie file
   */
  src?: string;
};

function SignupLeft({ src, ...props }: TSignupLeft) {
  const theme = useTheme();
  return (
    <div
      className={style.container}
      css={css`
        --signup-left-bg: ${theme.palette.primary.dark};
        --signup-left-font-color: ${theme.palette.primary.contrastText};
        --signup-left-shadow: ${theme.palette.mode === "light"
          ? theme.shadows[4]
          : "0px 2px 4px -1px rgba(255,255,255,0.2),0px 4px 5px 0px rgba(255,255,255,0.14)"};
      `}
    >
      <div>
        <Mark size={50} />
        <h1>与全球宠物爱好者连接</h1>
        <p>探索宠物生活的乐趣，与全球宠物爱好者分享你的独特故事。在这里，你可以和宠物一起享受美好的生活，还可以发现各种关于宠物的好玩、有趣的事情。</p>
      </div>
      <div className={style.animate}>
        <Player
          autoplay
          loop
          hover
          src={
            src ?? "https://assets6.lottiefiles.com/packages/lf20_whqxjuqz.json"
          }
          className="player"
        />
      </div>
    </div>
  );
}

export default SignupLeft;
