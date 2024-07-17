import { useRef, useState } from "react";
import UseChange from "../../Hooks/Auth/UseChange";

const Change = () => {
  const [change, setchange] = useState({
    Email: "",
    UserName: "",
    Password: "",
    NewPassword: "",
  });

  const UserName = useRef();

  const { usechange, loading } = UseChange();
  const HandleChange = (e) => {
    e.preventDefault();
    const obj = {
      UserName: UserName.current.value,
      Email: change.Email,
      Password: change.Password,
      NewPassword: change.NewPassword,
    };
    usechange(obj);
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
          change
        </div>
        <div className="card-body ">
          <form onSubmit={HandleChange}>
            <div className="row">
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  ref={UserName}
                  className="form-control"
                  placeholder="Enter Your E-mail or User Name"
                  value={change.Email}
                  onChange={(e) =>
                    setchange({
                      ...change,
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
                  value={change.Password}
                  onChange={(e) =>
                    setchange({
                      ...change,
                      Password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your NewPassword"
                  value={change.NewPassword}
                  onChange={(e) =>
                    setchange({
                      ...change,
                      NewPassword: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-1" style={{ width: "30%", margin: "0 auto" }}>
                <button
                  type="text"
                  className="form-control btn btn-primary mt-4"
                >
                  {loading ? "Loading..." : "change"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Change;
