import React from 'react';
import style from './ChatList.module.css';

function ChatList(): JSX.Element {
  return (
    <div className={style.chatbox}>
      <div className={style.inputgroup}>
        <input className={style.input} type="tel" placeholder="Enter phone number to add new chat" />
        <button type="button" className={style.button}>
          +
        </button>
      </div>
      <div className={style.list} />
    </div>
  );
}

export default ChatList;
