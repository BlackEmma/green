import React from 'react';
import style from './ChatPage.module.css';
import ChatList from './ChatList/ChatList';
import Chat from './Chat/Chat';

function ChatPage(): JSX.Element {
  return (
    <div className={style.container}>
      <ChatList />
      <Chat />
    </div>
  );
}

export default ChatPage;
