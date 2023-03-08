//应用
import React, { useRef } from "react";
//style
import style from "./Complete.module.css";
import "./Complete.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import { CSSTransition } from "react-transition-group";
import { FiCheck } from "react-icons/fi";
//hooks

type IComplete = {
  /**
   * size
   */
  size: string;
};

function Complete({ size = "150px", ...props }: IComplete) {
  const theme = useTheme();
  const [progress, setProgress] = React.useState(0);
  const [rate, setRate] = React.useState(1);
  const [stop, setStop] = React.useState(0);
  const outerRef = useRef(null);
  const [inProp, setInProp] = React.useState(false);
  const [svg, setSvg] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = window.setInterval(() => {
        setProgress((progress) => progress + rate);
      }, 20);
      setStop(timer);
      return () => clearInterval(timer);
    }
  }, [rate]);
  React.useEffect(() => {
    console.log(progress);
    if (progress > 30) setRate(2);
    if (progress > 50) setRate(5);
    if (progress > 99) {
      console.log(progress);
      clearInterval(stop);
      setInProp(true);
    }
  }, [progress, stop]);
  return (
    <div
      className={style.container}
      css={css`
        --success-bg: ${theme.palette.success.light};
        --success-inner-bg: ${theme.palette.background.default};
        --success-size: ${size};
      `}
    >
      <CSSTransition
        nodeRef={outerRef}
        in={inProp}
        timeout={500}
        classNames="success-outer"
        onEntered={() => {
          setInProp(false);
          setSvg(true);
        }}
      >
        <div
          className={style.outer}
          ref={outerRef}
          css={css`
            background-image: conic-gradient(
              ${theme.palette.success.light} ${3.6 * progress}deg,
              ${theme.palette.background.default} 0deg
            );
          `}
        >
          <div className={[style.inner, "inner"].join(" ")}>
            {svg ? <FiCheck /> : null}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Complete;
