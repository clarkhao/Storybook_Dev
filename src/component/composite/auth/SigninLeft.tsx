//应用模块
import React, { Fragment } from "react";
//style
import style from "./SigninLeft.module.css";
import { useTheme } from "@mui/material/styles";
import { css } from "@emotion/react";
//组件
import Input from "../../ui/InputUI";
import Mark from "../../ui/MarkUI";
import Button from "@mui/material/Button";
import { iconLibrary } from "../../utils";
import Link from "next/link";
import { useRouter } from "next/router";
//type
import { SideSign } from "../../utils";

type TSigninLeft = {
  /**
   * i18n data
   */
  i18n?: SideSign;
};

function SigninLeft({ i18n, ...props }: TSigninLeft) {
  const router = useRouter();
  const { locale } = router;
  const theme = useTheme();
  const [data, setData] = React.useState({
    name: "",
    password: "",
  });
  const [errMsgs, setErrMsgs] = React.useState({
    name: "",
    password: "",
  });
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({ ...data, name: e.target.value });
  };
  const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({ ...data, password: e.target.value });
  };
  const handleClearErr = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    setErrMsgs({ ...errMsgs, name: "", password: "" });
  };
  return (
    <div
      className={style.container}
      css={css`
        --signin-left-bg: ${theme.palette.neutral.main};
        --signin-left-shadow: ${theme.shadows[4]};
      `}
    >
      <header className={style.header}>
        <Mark size={50} />
        <h2>{"欢迎回来！请登录"}</h2>
      </header>
      <main className={style.main}>
        <div className={style.oauth}>
          <Button
            variant="contained"
            startIcon={iconLibrary.get("github")}
            size='large'
            color="info"
          >
            <Link href={`/api/v0/auth/signin?oauth=github&locale=${locale}`}>
              {i18n?.oauth_github ?? "使用GITHUB登陆"}
            </Link>
          </Button>
          <Button
            variant="contained"
            startIcon={iconLibrary.get("google")}
            size='large'
            color="warning"
          >
            <Link href={`/api/v0/auth/signin?oauth=google&locale=${locale}`}>
              {i18n?.oauth_google ?? "使用GOOGLE登陆"}
            </Link>
          </Button>
          <p>{"或者"}</p>
        </div>
        <form id="signup-form" className={style.form}>
          <Input
            type="text"
            name="name"
            labelText={i18n?.user_title ?? "用户名"}
            width="100%"
            value={data.name}
            handleInput={handleUserInput}
            errMsg={errMsgs.name}
            handleFocus={handleClearErr}
          />
          <Input
            type="password"
            name="pwd"
            labelText={i18n?.password_title ?? "密码"}
            width="100%"
            value={data.password}
            handleInput={handlePwdInput}
            errMsg={errMsgs.password}
            handleFocus={handleClearErr}
          />
          <Button variant="contained" fullWidth onClick={() => {}}>
            {i18n?.submit ?? "登陆"}
          </Button>
        </form>
      </main>
    </div>
  );
}

export default SigninLeft;
