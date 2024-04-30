import { useContext, useState } from "react";
import { AuthContext, BASE_URL_MESS } from "../App";
import axios from "axios";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import addMsg from "../assets/addmsg.jpg";

const PostMassage = ({ page }) => {
  const [newMsg, setNewMsg] = useState("");
  const navigate = useNavigate();
  const { setMessage, userId } = useContext(AuthContext);

  const postMsg = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL_MESS}/${userId}`,
        {
          massage_text: newMsg,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response);
      if (response.status === 201) {
        navigate("/Massage");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.msg);
    }
  };

  const handleClick = () => {
    postMsg();
  };

  return (
    <div
      style={{
        flexDirection: "column",
        backgroundImage: `url(${addMsg})`,
        backgroundSize: "cover",
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: "10px" }}>{page}</h1>
      <Box component={"form"} sx={{ m: 1 }} autoComplete="off">
        <TextField
          sx={{ m: 1 }}
          id="text"
          type="text"
          label="Enter your massage"
          variant="outlined"
          onChange={(e) => setNewMsg(e.target.value)}
        />
      </Box>
      <Button onClick={handleClick} variant="contained">
        {page}
      </Button>
    </div>
  );
};

export default PostMassage;
