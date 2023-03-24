//应用
import React, { useRef } from "react";
//style
import style from "./Follower.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import { IconButton } from "@mui/material";

type TFollower = {
  /**
   * size
   */
  size: number;
  /**
   * value
   */
  data: {name: string; value: number;}
};

function Follower({ size=100, ...props }: TFollower) {
  return (
    <>
      <IconButton>
        <div className={style.icon} css={css`
        --follower-icon-size: ${size}px;
        `}>
          <div>{props.data?.value ?? Math.floor(Math.random()*1000) + 20}</div>
          <p>{props.data?.name ?? 'Followers'}</p>
        </div>
      </IconButton>
    </>
  );
}

export default Follower;
