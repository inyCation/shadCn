import React from 'react'

import img from "../assets/testimonials.svg"
import img2 from "../assets/profilePic.avif"
import "./testimonials.scss"

const Testimonials = () => {
  return (
    <div className='testimonials' >
        <div className="left">
            <img src={img} alt="" />
        </div>
        <div className="right">
            <div className="top">Testimonials</div>
            <div className="title">Our Clients <span>Love Us.</span></div>
            <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
            </div>

            <div className="cards">
                <div className="card"> 
                    <div className="stars">* * * * *</div> 
                    <div className="title">Amazing User Experience</div>
                    <div className="desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nobis nesciunt nemo ipsa, expedita exercitationem. Quaerat esse ipsa earum quisquam.
                    </div>

                    <div className="user">
                        <div className="profile">
                            <img src={img2} alt="" />
                        </div>
                        <div className="nameDetails">
                            <div className="name">Charlotte Hale</div>
                            <div className="dazzy">
                                Director, Delos INC.
                            </div>
                        </div>  

                        <div className="arrow">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Testimonials