import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import UseLogin from "../../Hooks/Auth/UseLogin";
const Login = () => {
  const [login, setlogin] = useState({
    Email: "",
    UserName: "",
    Password: "",
  });

  const UserName = useRef();

  const { uselogin, loading } = UseLogin();
  const HandleLogin = (e) => {
    e.preventDefault();
    const obj = {
      UserName: UserName.current.value,
      Email: login.Email,
      Password: login.Password,
    };
    uselogin(obj);
  };
  return (
    <div
      className="contaier d-flex align-items-center  text-center  justify-content-center  bg-dark login"
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "450px", borderRadius: "12px", height: "340px" }}
      >
        <div
          className="card-title "
          style={{ fontSize: "38px", fontWeight: "bold" }}
        >
          Login
        </div>
        <div className="card-body ">
          <form onSubmit={HandleLogin}>
            <div className="row">
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  ref={UserName}
                  className="form-control"
                  placeholder="Enter Your E-mail or User Name"

                  value={login.Email}
                  onChange={(e) =>
                    setlogin({
                      ...login,
                      Email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Password"
                  value={login.Password}
                  onChange={(e) =>
                    setlogin({
                      ...login,
                      Password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-1" style={{ width: "30%", margin: "0 auto" }}>
                <button
                  type="text"
                  className="form-control btn btn-primary mt-4"
                >
                  {loading ? "Loading..." : "Login"}
                </button>
              </div>
              <Link
                to="/Change"
                className="mt-3 "
                style={{ textDecoration: "none" }}
              >
                ForgetPassword
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
