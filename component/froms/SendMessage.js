import { useState } from "react";

import Send from "@mui/icons-material/Send";
import { Box, InputAdornment, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";

const SendMessage = ({ messageSending }) => {
  const [message, setMessage] = useState("");

  const summitMessage = () => {
    let send = message;
    send = send.trim();
    if (!send || send === "") {
      setMessage("");
      return;
    }
    messageSending(send);
    setMessage("");
  };

  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
          <TextField
            placeholder="Message here ... "
            style={{ width: "100%" }}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                summitMessage();
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="messageBox">
                  <Send
                    sx={{ color: "blueviolet", fontSize: "30px" }}
                    onClick={summitMessage}
                  />
                </InputAdornment>
              ),
            }}
          />
      </Paper>
    </Box>
  );
};

export default SendMessage;
