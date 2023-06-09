import React from 'react';
import style from './Chat.module.css';

function Chat(): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.chat} />
      <div className={style.inputgroup}>
        <input className={style.input} type="text" placeholder="Enter your message" />
        <button type="submit" className={style.button}>
          {'=>'}
        </button>
      </div>
    </div>
  );
}

export default Chat;
