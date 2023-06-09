import React from 'react';
import style from './LoginForm.module.css';

function LoginForm(): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <form>
          <label htmlFor="idInstance">Your idInstance:</label>
          <input id="idInstance" />
          <label htmlFor="apiTokenInstance">Your apiTokenInstance:</label>
          <input id="apiTokenInstance" />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
