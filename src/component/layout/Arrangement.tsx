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
  const [renderWidth, setRenderWidth] = React.useState<number>(document.getElementById('masonry')?.offsetWidth as number);
  React.useEffect(() => {
    console.log(document.getElementById('masonry')?.offsetWidth);
    const handleResize = () => {
      setRenderWidth(document.getElementById('masonry')?.offsetWidth as number);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  React.useEffect(() => {
    console.log(renderWidth)
    fecthMasonry("masonry", "sub", Math.floor((document.getElementById('masonry')?.offsetWidth as number - 120) / width));
  }, [renderWidth])
  const renderList = React.useMemo(() => {
    const columns = Math.floor(renderWidth / 200);
    let initial = new Array<Array<number>>(0);
    for (let i = 0; i < columns; i++) {
      initial.push(new Array<number>(0));
    }
    return Array.from(new Array(30).fill(0).keys());
  }, [renderWidth]);
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
