import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { endpoint } from "../..";
import { UseAuthLogin } from "../../Context/Auth-Context";
const UseLogout = () => {
  const [loading, setloading] = useState(false);
  const { setAuthlogin } = UseAuthLogin();

  const uselogout = async () => {
    setloading(true);
    let { data } = await axios.post(endpoint + "/api/auth/logout");
    if (data.status === "Success") {
      toast.success(data.message);
      localStorage.removeItem("Authlogin");
      setAuthlogin(null);
    }
    setloading(false);
  };
  return { uselogout, loading };
};

export default UseLogout;
