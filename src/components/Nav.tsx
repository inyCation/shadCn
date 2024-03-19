import { Button } from "@/components/ui/button"
import "./nav.scss"


const Nav : React.FC = () => {
  return (
    <nav>
        <div className="logo">
            <div className="t">T</div>
            <div className="tReact">Treact</div>
        </div>

        <div className="right">
            <div className="ul">
                <li>About</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Pricing</li>
            </div>

            <div className="login">
                <div className="loginBtn">Login</div>
                <Button className="signupBtn">Signup</Button>
            </div>
        </div>
    </nav>
  )
}

export default Nav;
