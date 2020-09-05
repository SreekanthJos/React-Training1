import React, { Component } from 'react';
import { Header,Footer,Home } from "./components";
import "./app.scss"
import  './components/common.scss'
export default function App() {  
      return (
         <div className="container">
            <Header />
            <Home/>
            <Footer></Footer>
         </div>
      );   
}
