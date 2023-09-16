import { Card, Stack, ToggleButtonGroup, Button } from "@mui/joy";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Registration = () => {
  const [value, setValue] = useState("student register");
  const navigate = useNavigate();
  return (
    <Stack sx={{ py: 10 }}>
      <Card
        sx={{
          width: 0.3,
          mx: "auto",
          alignItems: "center",
        }}
      >
        <ToggleButtonGroup
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            navigate(newValue);
          }}
        >
          <Button value={"student"}>Student Register</Button>
          <Button value={"teacher"}>Teacher Register</Button>
        </ToggleButtonGroup>
          <Outlet />
          <Button color="primary" variant="solid">submit form</Button>
      </Card>
    </Stack>
  );
};

export default Registration;
