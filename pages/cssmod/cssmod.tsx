import React from 'react';
import classes from './cssmod.module.css';

const cssmod = () => {
  return (
    <>
      <div className={classes.heading}>
        <h1>cssmodulesでcss animationを作成</h1>
        <ol>
          <li>●●module.cssというファイルを作成する</li>
          <li>
            cssファイルとして普通にcssを記述する、注意点としてはidは使えない
          </li>
          <li>
            cssファイルを目的とするtsx(jsx)ファイル内でimportすると、そのcssファイルのクラス名を使えるようになる。importするときの変数名は適当だがここではclassesとしている
          </li>
          <li>
            目的とするタグにclassName={classes.クラス名}
            とすることでcssが適用される
          </li>
        </ol>
      </div>
      <div className={classes.content}>アニメーションします</div>
    </>
  );
};

export default cssmod;
