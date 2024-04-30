import { useContext } from "react";
import { AuthContext } from "../App";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

const DeleteMass = ({ arrToList, handleDelete }) => {
  const { userId, setMessage } = useContext(AuthContext);

  const deleteMessages = async () => {
    handleDelete();
  };

  return (
    <Button
      onClick={deleteMessages}
      variant="contained"
      sx={{ marginLeft: "20px" }}
    >
      Delete Selected Messages
    </Button>
  );
};
export default DeleteMass;
