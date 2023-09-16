import { Button, Card, Stack, Typography } from "@mui/joy";

const Home = () => {
  return (
    <Stack sx={{ py: 4 }}>
      <Card sx={{ alignItems: "flex-start" }}>
        <Typography variant="h6" fontWeight={700}>
          Want to register?
        </Typography>
        <Button>register as student / teacher</Button>
      </Card>
    </Stack>
  );
};

export default Home;
