// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import myPic from '/pic.png'
import './App.css'

function App() {
  return (
    <>
      <ProfileCard/>
    </>
  )
}

const ProfileCard = () => {
  return (
    <div className='profilecard'>
        <img src={myPic} className="MyPic" alt="My Picture" />
        <div>
        <h2>Praween Soni</h2>
        <h4>Web Developer</h4>
        </div>
    </div>
  );
};

export default App