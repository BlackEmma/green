import React from 'react';
import style from './LoginForm.module.css';

function LoginForm(): JSX.Element {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Sign In</h2>
      <form className={style.content}>
        <input className={style.input} type="text" placeholder="Enter your idInstance" />
        <input className={style.input} type="text" placeholder="Enter your apiTokenInstance" />
        <button type="button" className={style.button}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
