import img from "../assets/quality.png"
import "./quality.scss"


const Quality = () => {
  return (
    <div className='quality'>
        <div className="left">
            <div className="top">Quality Work</div>
            <div className="title">
            Designed & Developed by <span>Professionals.</span>
            </div>
            <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="btn">Learn More</div>
        </div>
        <div className="right">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Quality