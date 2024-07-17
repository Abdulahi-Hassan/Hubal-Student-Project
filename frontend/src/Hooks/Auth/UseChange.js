import { useState } from "react";
import { endpoint } from "../..";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
const UseChange = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const usechange = async (change) => {
    try {
      setloading(true);
      let { data } = await axios.post(endpoint + "/api/auth/change", change);
      if (data.status === "Success") {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data);
      }
      setloading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return { usechange, loading };
};

export default UseChange;
