import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function LoginPage() {
  return (
    <Container
      style={{
        marginTop: "15vh",
      }}
      maxWidth="md"
    >
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <img
            className="mb-[30px] max-w-[150px] mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6Nj5MmclISJO9ogNDqk2U7YEGoLzShd_7Q&usqp=CAU"
            alt="star"
          />
        </Grid>
        <Grid item xs={12}>
          <h1 style={{ color: "gray" }}>AWARD</h1>
        </Grid>
        <Grid item xs={12}>
          <p className="mb-[20px]">
            Enter your email address <br /> to sign in and continue
          </p>
        </Grid>
        <Grid item xs={12}>
          <form>
            <TextField
              id=""
              label=""
              variant="outlined"
              color="primary"
              margin="none"
              sizes="small"
              //  value={oke}
              //  onChange={ya}
            />
            <br />
            <Button
              variant="contained"
              style={{ marginTop: "20px", backgroundColor: "grey" }}
              color="primary"
            >
              Sign In
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginPage;
