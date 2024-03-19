
import img from "../assets/steps.png"

import "./steps.scss"

const Steps = () => {
  return (
    <div className='steps'>
        <div className="left">
            <img src={img} alt="" />
        </div>
        <div className="right">
            <div className="top">Steps</div>
            <div className="title">Easy to Get <span>Started.</span></div>
            
            <div className="cards">
                <div className="card">
                    <div className="number">
                        01
                    </div>
                    <div className="details">
                        <div className="title">
                            Register
                        </div>
                        <div className="desc">
                        Create an account with us using Google or Facebook.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="number">
                        02
                    </div>
                    <div className="details">
                        <div className="title">
                            Register
                        </div>
                        <div className="desc">
                        Create an account with us using Google or Facebook.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="number">
                        03
                    </div>
                    <div className="details">
                        <div className="title">
                            Register
                        </div>
                        <div className="desc">
                        Create an account with us using Google or Facebook.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps