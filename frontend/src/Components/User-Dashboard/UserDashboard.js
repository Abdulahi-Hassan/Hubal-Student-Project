import { useState } from "react";
import Change from "../ProfilePic";

const UserDashboard = () => {
  const [user, setuser] = useState(false);
  const [student, setstudent] = useState(false);
  const [Class, setClass] = useState(false);
  const [payment, setpayment] = useState(false);
  const [Profile, setProfile] = useState(false);
  const [Dashboard, setDashboard] = useState(true);

  const HandleProfile = () => {
    setDashboard(false);
    setProfile(true);
    setuser(false);
    setstudent(false);
    setClass(false);
    setpayment(false);
  };
  const HandleUser = () => {
    setuser(true);
    setDashboard(false);
    setstudent(false);
    setProfile(false);
    setClass(false);
    setpayment(false);
  };

  const HandleStudent = () => {
    setDashboard(false);
    setProfile(false);
    setuser(false);
    setstudent(true);
    setClass(false);
    setpayment(false);
  };
  const HandleClass = () => {
    setProfile(false);
    setDashboard(false);
    setuser(false);
    setstudent(false);
    setClass(true);
    setpayment(false);
  };
  const HandlePayment = () => {
    setDashboard(false);
    setDashboard(false);
    setuser(false);
    setProfile(false);
    setstudent(false);
    setClass(false);
    setpayment(true);
  };
  const HandleDashboard = () => {
    setDashboard(false);
    setuser(false);
    setstudent(false);
    setClass(false);
    setpayment(false);
  };
  return (
    <div className="grid">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div>
          <img
            onClick={HandleProfile}
            style={{
              width: "100px",
              borderRadius: "50%",
              height: "100px",
              margin: "10px 10px",
            }}
            src="https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt=""
          />
          <h1>Liibaan</h1>
          <hr
            style={{
              width: "80%",
              margin: "0 auto",
              height: "3px",
              backgroundColor: "#fff",
              marginBottom: "20px",
              marginTop: "20px",
              borderWidth: "32px solid blue",
            }}
          />

          <div>
            <div
              className=" "
              onClick={HandleUser}
              style={{
                background: "#022e5e",
                color: "#fff",
                padding: "5px",
                borderRadius: "10px",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              User
            </div>
          </div>
          <hr />
          <div>
            <div
              className="btn btn-primary "
              onClick={HandleStudent}
              style={{
                background: "#022e5e",
               
                color: "#fff",
                padding: "5px",
                width: "100%",
                borderRadius: "10px",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Student
            </div>
          </div>
          <hr />

          <div>
            <div
              className="btn btn-primary "
              onClick={HandleClass}
              style={{
                width: "100%",
                background: "#022e5e",
               
                color: "#fff",
                padding: "5px",
                borderRadius: "10px",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Class
            </div>
          </div>
          <hr />

          <div>
            <div
              className="btn btn-primary "
              onClick={HandlePayment}
              style={{
                background: "#022e5e",
               
                width: "100%",
                color: "#fff",
                padding: "5px",
                borderRadius: "10px",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Payment
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        {user && "<User />"}
        {student && "<Student />"}
        {Class && "<Class />"}
        {payment && "<Payment />"}
        {Profile && <Change />}
        {Dashboard && (
          <div>
            <h1>Welcome to Liibaan</h1>
            <hr
              style={{
                width: "80%",
                margin: "0 auto",
                height: "3px",
                backgroundColor: "#fff",
                marginBottom: "20px",
                marginTop: "20px",
                borderWidth: "32px solid blue",
              }}
            />
            <div
              className="btn btn-primary "
              onClick={HandleDashboard}
              style={{
                background: "#022e5e",
               
                color: "#fff",
                padding: "5px",
                width: "100%",
                borderRadius: "10px",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Go to Dashboard
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserDashboard
