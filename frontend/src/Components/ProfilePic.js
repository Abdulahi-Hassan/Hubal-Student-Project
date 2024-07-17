import { useRef, useState } from "react";
import UseChange from "../Hooks/Auth/UseChange";

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
      className="contaier d-flex mt-4  text-center  justify-content-center "
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "400px", borderRadius: "12px", height: "400px" , backgroundColor: "#007bff",
            color: "#fff"}}

       
      >
        <div
          className="card-title "
          style={{ fontSize: "38px", fontWeight: "bold" }}
        >
         <img
            style={{
              width: "100px",
              borderRadius: "50%",
              height: "100px",
              margin: "10px 10px",
            }}
            src="https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="card-body " >
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
