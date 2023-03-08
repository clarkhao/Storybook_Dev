//应用
import React, {Fragment} from 'react';
//style
import style from './LeftRight.module.css';
import { useTheme } from '@mui/material/styles';
import {css} from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

type TLeftRight = {
  /**
   * children from left
   */
  left: EmotionJSX.Element | React.ReactNode;
  /**
   * children from right
   */
  right: EmotionJSX.Element | React.ReactNode;
}

function LeftRight({left, right, ...props}: TLeftRight) {
  return <div className={style.container}>
    {left}
    {right}
  </div>
}

export default LeftRight;