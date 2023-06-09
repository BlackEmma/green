import React from 'react';
// import Main from '../features/Main/Main';
import ChatPage from '../features/ChatPage/ChatPage';
import style from './App.module.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <div className={style.container}>
        <ChatPage />
      </div>
    </div>
  );
}

export default App;
