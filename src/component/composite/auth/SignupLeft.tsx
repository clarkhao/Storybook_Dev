//应用模块
import React, { Fragment } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { LoremIpsum } from "lorem-ipsum";
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
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  return (
    <div
      className={style.container}
      css={css`
        --signup-left-bg: ${theme.palette.primary.dark};
        --signup-left-font-color: ${theme.palette.primary.contrastText};
      `}
    >
      <div>
        <Mark size={50} />
        <h1>{lorem.generateWords(2)}</h1>
        <p>{lorem.generateSentences(2)}</p>
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
