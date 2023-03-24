//应用
import React, { useRef } from "react";
//style
import style from "./SidebarMenu.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import { FiMenu } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";

type TSidebarMenu = {
  /**
   * isHidden
   */
  isHidden: boolean;
  /**
   *
   */
  handleHide: (e: React.MouseEvent) => void;
};

function SidebarMenu({ isHidden = false, ...props }: TSidebarMenu) {
  const theme = useTheme();
  return (
    <aside className={[style.container, isHidden ? style.hide : ""].join(" ")}
    css={css`
      --sidebar-menu-bg-color: ${theme.palette.grey[400]}
    `}>
      <header className={style.header}>
        <IconButton onClick={props.handleHide}>
          <FiMenu />
        </IconButton>
      </header>
      <main className={style.main}>
        <ul>
          {(new Array(10).fill("Menu Item")).map((v, i) => (
            <li key={`sidebar-item-${i}`}>{v}</li>
          ))}
        </ul>
      </main>
    </aside>
  );
}

export default SidebarMenu;
