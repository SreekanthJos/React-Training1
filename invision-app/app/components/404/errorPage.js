import React from 'react';
import './errorPage.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';

function ErrorPage () {
  return (
    <React.Fragment>
      <header className='error-header'>
        <Header/>
      </header>
      <div className='error-container'>
        <p className='error-title'>Page Not Found</p>
        <div className='error-img'></div>
        <button className='error-button'>go back to home</button>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default ErrorPage;
