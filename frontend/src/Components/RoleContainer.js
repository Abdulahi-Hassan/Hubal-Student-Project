import React from "react";
import AdminDashboard from "./Admin-Dashboard/AdminDashboard";
import UserDashboard from "./User-Dashboard/UserDashboard";
import { UseAuthLogin } from "../Context/Auth-Context";
const RoleContainer = () => {
  const { Authlogin } = UseAuthLogin();
  const { Role } = Authlogin;
  if (!Role) return null;
  return (
    <div className="grid">
      {Role === "Admin" && <AdminDashboard />}
      {Role === "User" && <UserDashboard />}
    </div>
  );
};

export default RoleContainer;
