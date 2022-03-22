import './App.css';
import React from 'react'
import Login from './components/Login'
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Newsfeed from './components/Newsfeed'
/* import Widget from './components/Widget' */
import { useStateValue } from './components/StateProvider';

export default function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {user ?
        <Login />
      :
      <>
        <Header />
        <div className="app-body">
          <Sidebar />
          <Newsfeed />
          {/* <Widget /> */}
        </div>
      </>}
      
    </div>
  );
}