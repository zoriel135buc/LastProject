import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../App";
import { BASE_URL } from "../App";
import { useNavigate } from "react-router-dom";

const Auth = (props) => {
  const { setToken } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/verify`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        console.log(response.data);
        setToken(response.data);
        setRedirect(true);
      }
    } catch (error) {
      setRedirect(false);
      navigate("/login");
    }
  };

  return redirect ? props.children : null;
};
export default Auth;
