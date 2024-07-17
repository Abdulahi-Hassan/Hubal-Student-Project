import { useState } from "react";
import { endpoint } from "../..";
import { toast } from "react-hot-toast";
import axios from "axios";
import { UseAuthLogin } from "../../Context/Auth-Context";
axios.defaults.withCredentials=true
const UseLogin = () => {
  const [loading, setloading] = useState(false);
  const { setAuthlogin } = UseAuthLogin();
  const uselogin = async (login) => {
    try {
      setloading(true);
      let { data } = await axios.post(endpoint + "/api/auth/login", login);
      if (data.status === "Success") {
        toast.success(data.message);
        localStorage.setItem("Authlogin", JSON.stringify(data));
        setAuthlogin(data);
      } else {
        toast.error(data);
      }
      setloading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return { uselogin, loading };
};

export default UseLogin;
