import { useState } from "react";
import UseSignUp from "../../Hooks/Auth/UseSignUp";

const SignUp = () => {
  const [signup, setsignup] = useState({
    UserName: "",
    Email: "",
    Password: "",
    Gender: "",
  });

  const HandleGender = (Gender) => {
    setsignup({ ...signup, Gender });
  };

  const { usesignup, loading } = UseSignUp();

  const HandleSignup = (e) => {
    e.preventDefault();
    usesignup(signup);
  };
  return (
    <div
      className="contaier d-flex align-items-center  text-center  justify-content-center  bg-dark login"
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "450px", borderRadius: "12px", height: "390px" }}
      >
        <div
          className="card-title "
          style={{ fontSize: "38px", fontWeight: "bold" }}
        >
          CreateUser
        </div>
        <div className="card-body ">
          <form onSubmit={HandleSignup}>
            <div className="row">
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your UserName"
                  value={signup.UserName}
                  onChange={(e) =>
                    setsignup({
                      ...signup,
                      UserName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Email"
                  value={signup.Email}
                  onChange={(e) =>
                    setsignup({
                      ...signup,
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
                  value={signup.Password}
                  onChange={(e) =>
                    setsignup({
                      ...signup,
                      Password: e.target.value,
                    })
                  }
                />
              </div>

              <GenderSignUp
                HandleChangeGender={HandleGender}
                SelectedGender={signup.Gender}
              />

              <div className="col-1" style={{ width: "30%", margin: "0 auto" }}>
                <button
                  type="text"
                  className="form-control btn btn-primary mt-4"
                >
                  {loading ? "Loading..." : "SignUp"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

const GenderSignUp = ({ HandleChangeGender, SelectedGender }) => {
  return (
    <div className="mt-4 muno">
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="Gender"
          id="inlineRadio1"
          checked={SelectedGender === "male"}
          onChange={() => HandleChangeGender("male")}
        />
        <label className="form-check-label">Male</label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="Gender"
          id="inlineRadio1"
          checked={SelectedGender === "female"}
          onChange={() => HandleChangeGender("female")}
        />
        <label className="form-check-label">Female</label>
      </div>
    </div>
  );
};
