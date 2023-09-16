import { Input, Stack } from "@mui/joy";

const TeacherRegistration = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Input placeholder="Enter Your Full Name" />
      <Input placeholder="Enter Your Email Address" />
      <Input placeholder="Enter Your Aadhar Card Number" />
      <Input placeholder="Enter Your PAN Card Number" />
    </Stack>
  );
};

export default TeacherRegistration;
