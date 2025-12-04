import React from 'react'
import './styles.css';
import logo from './assets/banner1.png';


const App:React.FC = () => {
  return (
    <div>
        <h1 className='heading'>Hello, React + Typescript with Webpack!</h1>
        <img src={logo} className="logo" />
        <p>I have created this page from scratch trying to understand the flow from JSX - .js using webpack bundler</p>
    </div>
  )
}

export default App