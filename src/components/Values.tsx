import "./values.scss"
import img from "../assets/values.svg"

const Values = () => {
  return (
    <div className='values'>
        <div className="left">
            <div className="top">VALUES</div>
            <div className="title">We Always Abide by Our <span>Principles.</span></div>
            <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>

            <div className="cards">
                <div className="card">
                    <div className="top">
                        <div className="logo">L</div>
                        <div className="title">Affordable</div>
                    </div>
                    <div className="bottom">
                    We promise to offer you the best rate we can - at par with the industry standard.
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <div className="logo">A</div>
                        <div className="title">Affordable</div>
                    </div>
                    <div className="bottom">
                    We promise to offer you the best rate we can - at par with the industry standard.
                    </div>
                </div>
            </div>

            <div className="btn">
                Learn more
            </div>
        </div>
        <div className="right">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Values