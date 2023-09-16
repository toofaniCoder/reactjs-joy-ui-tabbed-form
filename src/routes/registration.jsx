import { Card, Stack, ToggleButtonGroup, Button } from "@mui/joy";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Registration = () => {
  const [value, setValue] = useState("teacher");
  const navigate = useNavigate();

  useEffect(() => {
    navigate(value);
  }, []);
  
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
        <Button fullWidth color="primary" variant="solid">
          submit form
        </Button>
      </Card>
    </Stack>
  );
};

export default Registration;
