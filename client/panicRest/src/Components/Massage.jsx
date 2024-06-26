import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";
import { BASE_URL_MESS } from "../App";
import axios from "axios";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import DeleteMass from "./DeleateMass";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import msgImg from "../assets/msg.jpg";

const Massage = ({ page }) => {
  const [getMess, setGetMess] = useState([]);
  const [deleteMsgIds, setDeleteMsgIds] = useState([]);
  const { token, userId, setUserId, setMessage } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    GetMessage();
  }, []);

  const GetMessage = async () => {
    try {
      const response = await axios.get(`${BASE_URL_MESS}/${userId}`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        console.log(response.data);
        setGetMess(response.data);
      }
    } catch (err) {
      console.log(err);
      setMessage(err.response.data.msg);
    }
  };

  const handleCheckboxChange = (massageId) => {
    setDeleteMsgIds((prevIds) =>
      prevIds.includes(massageId)
        ? prevIds.filter((id) => id !== massageId)
        : [...prevIds, massageId]
    );
  };

  const handleDelete = async () => {
    try {
      for (const messageId of deleteMsgIds) {
        await axios.delete(`${BASE_URL_MESS}/${userId}/${messageId}`, {
          withCredentials: true,
        });
      }

      GetMessage();
    } catch (error) {
      console.error("Error deleting messages:", error);
      setMessage(error.response.data.msg);
    }
  };

  const PostMassage = () => {
    navigate("/PostMassage");
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${msgImg})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px", // Added padding for mobile devices
        }}
      >
        <h3>{page}</h3>
        {getMess.map((item, index) => (
          <Card key={item.massage_id} sx={{ width: "100%", marginBottom: 2 }}>
            <CardContent>
              <input
                type="checkbox"
                id={`massage_${index}`}
                name={`massage_${index}`}
                checked={deleteMsgIds.includes(item.massage_id)}
                onChange={() => handleCheckboxChange(item.massage_id)}
              />
              <label htmlFor={`massage_${index}`} style={{ marginLeft: 10 }}>
                Massage {index + 1}: {item.massage_text}
              </label>
            </CardContent>
          </Card>
        ))}
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Adjusted flex direction for different screen sizes
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            onClick={PostMassage}
            variant="contained"
            size="large"
            sx={{ width: { xs: "100%", md: "auto" } }} // Adjusted button width for different screen sizes
          >
            Add Massage
          </Button>
          <DeleteMass
            arrToList={deleteMsgIds}
            handleDelete={handleDelete}
            size="large"
            sx={{ width: { xs: "100%", md: "auto" } }} // Adjusted button width for different screen sizes
          />
        </Box>
      </Box>
    </>
  );
};

export default Massage;
