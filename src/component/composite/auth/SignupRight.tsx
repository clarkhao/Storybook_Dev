//应用模块
import React, { Fragment } from "react";
import { verifySignup, signupSchema } from "../../utils/validate";
import { hybridEncrypt } from "../../utils";
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
  const [data, setData] = React.useState({
    email: "",
    name: "",
    password: "",
    rePwd: "",
  });
  const [errMsgs, setErrMsgs] = React.useState({
    email: "",
    name: "",
    password: "",
    rePwd: "",
  });
  //开始处理加密开始loading, loading true时出现loading图标
  const [isLoading, setIsLoading] = React.useState(false);
  //如果成功出现成功提示
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({ ...data, email: e.target.value });
  };
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({ ...data, name: e.target.value });
  };
  const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({ ...data, password: e.target.value });
  };
  const handleRePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({ ...data, rePwd: e.target.value });
  };
  const handleClearErr = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    setErrMsgs({ ...errMsgs, email: "", name: "", password: "", rePwd: "" });
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      //verify data
      const verified = signupSchema.safeParse(data);
      if (!verified.success) {
        const issues = verified.error.issues;
        const errSet = new Set();
        const errMessages: { [key: string]: string } = {};
        issues
          .filter((e) => {
            if (!errSet.has(e.path[0])) {
              errSet.add(e.path[0]);
              return true;
            } else {
              return false;
            }
          })
          .forEach((e) => {
            errMessages[e.path[0]] = e.message;
          });
        console.log(`errMessages: ${JSON.stringify(errMessages)}`);
        setErrMsgs({ ...errMsgs, ...errMessages });
      } else {
        setIsLoading(true);
        //encrypt data
        const encrypted = await hybridEncrypt(verified.data);
        //post data
        fetch('https://userauth.clarkhao.repl.co/api/v0/auth/signup', {
          method: 'POST',
          mode: 'cors',
          body: new URLSearchParams({data: encrypted}),
          cache: 'no-cache',
          redirect: 'follow'
        }).then(response => {
          setIsLoading(false);
          if(response.status === 201) {
            
          } else {
            return response.json();
          }
        })
        .then(response => {
          const data = new URLSearchParams(response);
          console.log(data.get('msg'));          

        })
      }
      
    } catch (error) {
      //可能的错误，加密失败，网络失败
      console.log(`${error}`);
    }
  };
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
          type="email"
          name="email"
          width="100%"
          value={data.email}
          handleInput={handleEmailInput}
          errMsg={errMsgs.email}
          handleFocus={handleClearErr}
        />
        <Input
          type="text"
          name="name"
          labelText="User"
          width="100%"
          value={data.name}
          handleInput={handleUserInput}
          errMsg={errMsgs.name}
          handleFocus={handleClearErr}
        />
        <Input
          type="password"
          name="pwd"
          width="100%"
          value={data.password}
          handleInput={handlePwdInput}
          errMsg={errMsgs.password}
          handleFocus={handleClearErr}
        />
        <Input
          type="password"
          name="rpwd"
          labelText="确认密码"
          width="100%"
          value={data.rePwd}
          handleInput={handleRePwdInput}
          errMsg={errMsgs.rePwd}
          handleFocus={handleClearErr}
        />
        <Link href="/auth/privacy">点击创建账户，同意隐私条款</Link>
        <Button variant="contained" fullWidth onClick={handleSubmit}>
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
