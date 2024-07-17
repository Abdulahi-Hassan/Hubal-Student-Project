import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import Change from "./Pages/Auth/Change";
import { Toaster } from "react-hot-toast";
import { UseAuthLogin } from "./Context/Auth-Context";
import UserDashboard from "./Components/User-Dashboard/UserDashboard";
import AdminDashboard from "./Components/Admin-Dashboard/AdminDashboard";
import RoleContainer from "./Components/RoleContainer";
import { Header } from "./Pages/Header";
import Home from "./Pages/Page/Home";
const App = () => {
  const { Authlogin } = UseAuthLogin();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Dashboard"
          element={Authlogin ? <RoleContainer /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={Authlogin ? <Navigate to="/Dashboard" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={Authlogin ? <Navigate to="/Dashboard" /> : <Login />}
        />
        <Route path="/change" element={<Change />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
