import React from 'react';
import Header from '../Header/Header';
import LoginForm from '../LoginForm/LoginForm';
import style from './Main.module.css';

function App(): JSX.Element {
  return (
    <div className={style.container}>
     <Header />
     <LoginForm />
    </div>
  );
}

export default App;
