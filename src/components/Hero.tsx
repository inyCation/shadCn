import React from 'react'
import img from "../assets/trusted.png"
import img2 from '../assets/hero.svg'

import "./hero.scss"

const Hero : React.FC = () => {
  return (
    <main>
        <div className="left">
            <div className="title">
                Beautiful React Templates <span>for you.</span>
            </div>
            <div className="desc">Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.</div>
            <div className="inputBox">
                <input type="text" name="input" id="input" placeholder='Your Email Address' />
                <div className="btn">Get Started</div>
            </div>
            <div className="trusted">
                <div className="title">Our TRUSTED Customers</div>
                <img src={img} alt="" />
            </div>
        </div>
        <div className="right">
            <img src={img2} alt="" />
        </div>
    </main>
  )
}

export default Hero