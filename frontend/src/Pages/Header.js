import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import UseLogout from "../Hooks/Auth/UseLogout";
export const Header = () => {
  const Handle = () => {
    let nav = document.querySelector("nav");
    nav.classList.toggle("menu");
  };
  let token = localStorage.getItem("Authlogin");
  const { uselogout, loading } = UseLogout();
  const HandleLoginOut = () => {
    uselogout();
  };
  return (
    <div className="container lii ">
      <header>
        <Link className="logo">Student</Link>
        <nav className="ms-5 ">
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contuct">Contuct</Link>
        </nav>
        <div className="signup">
          {!token && (
            <>
              <Link style={{ textDecoration: "none" }} to="/login">
                SignIn
              </Link>
              <Link style={{ textDecoration: "none" }} to="/signup">
                SignUp
              </Link>
            </>
          )}
        </div>
        <div className="signup">
          {token && (
            <>
              <Link onClick={HandleLoginOut} style={{ textDecoration: "none" }}>
              {loading ? "loading ..." : 'SignOut'}
              </Link>
            </>
          )}
        </div>

        <div className="icons">
          <TiThMenu onClick={Handle} />
        </div>
      </header>
    </div>
  );
};
