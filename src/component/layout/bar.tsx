//应用
import React from 'react';
//style
import style from './Bar.module.css';
//组件
import {Left, Right} from '../composite/BarElement';

type BarType = {
    /**
     * left component
     */
    left: JSX.Element;
    /**
     * right component
     */
    right: JSX.Element;
}
function Bar({left=<Left />, right=<Right />, ...props}: BarType) {
    return (
        <div className={style.container}>
            {left}
            {right}
        </div>
    )
}

export default Bar;