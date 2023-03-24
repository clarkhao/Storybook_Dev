//应用
import React, { Fragment } from "react";
import { fecthMasonry } from "../utils";
//style
import style from "./Arrangement.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import PostCard from "../ui/PostCard";

type TArrangement = {
  /**
   * width
   */
  width: number;
};

function Arrangement({ width = 300, ...props }: TArrangement) {
  const [renderWidth, setRenderWidth] = React.useState<number>(0);
  fecthMasonry("masonry", "sub", Math.floor((renderWidth - 120) / width));
  React.useEffect(() => {
    setRenderWidth(window.innerWidth);
    const handleResize = () => {
      setRenderWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const renderList = React.useMemo(() => {
    const columns = Math.floor(renderWidth / 200);
    let initial = new Array<Array<number>>(0);
    for (let i = 0; i < columns; i++) {
      initial.push(new Array<number>(0));
    }
    console.log(initial);
    return Array.from(new Array(30).fill(0).keys());
  }, [renderWidth]);
  /* */

  return (
    <div className="masonry-layout">
      <div id="masonry">
        {renderList.map((image, index) => (
          <div className="sub" key={`post_id_${index}`}>
            <PostCard size={width} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Arrangement;
