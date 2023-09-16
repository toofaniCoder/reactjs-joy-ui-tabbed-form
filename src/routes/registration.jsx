import { Card, Stack, ToggleButtonGroup, Button } from "@mui/joy";
import { useState } from "react";

const Registration = () => {
  const [value, setValue] = useState("student register");
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
          }}
        >
          <Button value={"student register"}>Student Register</Button>
          <Button value={"teacher register"}>Teacher Register</Button>
        </ToggleButtonGroup>
      </Card>
    </Stack>
  );
};

export default Registration;
