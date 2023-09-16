import { Input, Stack } from "@mui/joy";

const StudentRegistration = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Input placeholder="Enter Your Full Name" />
      <Input placeholder="Enter Your Email Address" />
      <Input placeholder="Enter Your Phone Number" />
      <Input placeholder="Enter Your Full Address" />
    </Stack>
  );
};

export default StudentRegistration;
