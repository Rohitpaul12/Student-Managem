import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
        <Link to={'/'} className="title">Student DashBoard</Link>
        <div className="right">
            
          { 
          (
            <>
            <Link to={'/login'} className="login">Login</Link>
            <Link to={'/signup'} className="signup">Sign Up</Link>
            </>
          )
          }
        </div>
    </div>
  )
}
