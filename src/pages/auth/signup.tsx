//应用模块
import React, {Fragment} from 'react';
//style和主题
import style from '../../styles/assetsUpload.module.css';
import { PaletteMode, createTheme, ThemeProvider } from '@mui/material';
//组件
import SignupLeft from 'src/component/composite/auth/SignupLeft';
import SignupRight from 'src/component/composite/auth/SignupRight';
import LeftRight from 'src/component/layout/LeftRight';

function SignupPage() {
  return <>
    <LeftRight left={<SignupLeft />} right={<SignupRight />}/>
  </>
}

export default SignupPage;