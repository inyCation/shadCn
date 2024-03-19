
import img from "../assets/secure.svg"
import "./features.scss"

const Features = () => {
  return (
    <>
        <div className="featuresContainer">
            <div className="top">
                features
            </div>
            <div className="title">We have Amazing <span>Service.</span></div>

            <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <div className="cards">
                <div className="card">
                    <img src={img} alt="" />
                    <div className="detail">
                        <div className="title">
                            Secure
                        </div>
                        <div className="desc">We strictly only deal with vendors that provide top notch security.</div>
                    </div>
                </div>
                <div className="card">
                    <img src={img} alt="" />
                    <div className="detail">
                        <div className="title">
                            Secure
                        </div>
                        <div className="desc">We strictly only deal with vendors that provide top notch security.</div>
                    </div>
                </div>
                <div className="card">
                    <img src={img} alt="" />
                    <div className="detail">
                        <div className="title">
                            Secure
                        </div>
                        <div className="desc">We strictly only deal with vendors that provide top notch security.</div>
                    </div>
                </div>
                <div className="card">
                    <img src={img} alt="" />
                    <div className="detail">
                        <div className="title">
                            Secure
                        </div>
                        <div className="desc">We strictly only deal with vendors that provide top notch security.</div>
                    </div>
                </div>
                <div className="card">
                    <img src={img} alt="" />
                    <div className="detail">
                        <div className="title">
                            Secure
                        </div>
                        <div className="desc">We strictly only deal with vendors that provide top notch security.</div>
                    </div>
                </div>
                <div className="card">
                    <img src={img} alt="" />
                    <div className="detail">
                        <div className="title">
                            Secure
                        </div>
                        <div className="desc">We strictly only deal with vendors that provide top notch security.</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Features