//应用模块
import React, { Fragment } from "react";
//style
import style from "./SignupRight.module.css";
import { useTheme } from "@mui/material/styles";
import { css } from "@emotion/react";
//组件
import Input from "../../ui/Input";
import Button from "@mui/material/Button";
import { iconLibrary } from "../../utils";
import Link from "next/link";

type TSignupRight = {};

function SignupRight({ ...props }: TSignupRight) {
  const theme = useTheme();
  const [email, setEmail] = React.useState('');
  const [user, setUser] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [rePwd, setRePwd] = React.useState('');
  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  }
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUser(e.target.value);
  }
  const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd(e.target.value);
  }
  const handleRePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRePwd(e.target.value);
  }
  return (
    <div
      className={style.container}
      css={css`
        --signup-right-bg: ${theme.palette.neutral.main};
        --signup-right-font-color: ${theme.palette.text.primary};
        --signup-right-shadow: ${theme.palette.mode === "light"
          ? theme.shadows[4]
          : "0px 2px 4px -1px rgba(255,255,255,0.2),0px 4px 5px 0px rgba(255,255,255,0.14)"};
        --signup-right-link-color: ${theme.palette.primary.main};
      `}
    >
      <header>
        <h2>创建账户</h2>
        <Link href="/auth/signin">已有账户直接登陆？</Link>
      </header>
      <form id="signup-form" className={style.form}>
        <Input
          id="signup-email"
          type="email"
          name="email"
          width="100%"
          value={email}
          handleInput={handleEmailInput}
          handleFocus={() => {}}
        />
        <Input
          id="signup-user"
          type="text"
          name="user"
          labelText="User"
          width="100%"
          value={user}
          handleInput={handleUserInput}
          handleFocus={() => {}}
        />
        <Input
          id="signup-pwd"
          type="password"
          name="pwd"
          width="100%"
          value={pwd}
          handleInput={handlePwdInput}
          handleFocus={() => {}}
        />
        <Input
          id="signup-rpwd"
          type="password"
          name="rpwd"
          labelText="确认密码"
          width="100%"
          value={rePwd}
          handleInput={handleRePwdInput}
          handleFocus={() => {}}
        />
        <Link href="/auth/privacy">点击创建账户，同意隐私条款</Link>
        <Button variant="contained" fullWidth>
          创建账户
        </Button>
      </form>
      <footer>
        <div>或者</div>
        <div className={style.oauth}>
          <Button
            variant="contained"
            startIcon={iconLibrary.get("github")}
            color="info"
          >
            使用Github登陆
          </Button>
          <Button
            variant="contained"
            startIcon={iconLibrary.get("google")}
            color="warning"
          >
            使用Google登陆
          </Button>
        </div>
      </footer>
    </div>
  );
}

export default SignupRight;
