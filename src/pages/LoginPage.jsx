import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import CONSTANTS from "../utils/constants";
import axios from "axios";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [authField, setAuthField] = useState({});

  const handleAuthField = (event) => {
    const { name, value } = event.target;
    setAuthField({ ...authField, [name]: value });
  };

  useEffect(() => {
    localStorage.setItem("token", null);
    localStorage.setItem("email", null);
  }, []);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (_.isEmpty(authField)) {
      setError("Please fill email field");
      return;
    }
    setError("");
    axios
      .post(`${CONSTANTS.API_ROOT_URL}/login`, authField)
      .then((response) => {
        const data = response.data;
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        navigate("/home");
      })
      .catch((err) => {
        if (err) {
          console.log(err.response.data.message);
          setError(err.response.data.message);
        }
      });
  };

  return (
    <Container
      style={{
        marginTop: "10vh",
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
          <p>
            Enter your email address <br /> to sign in and continue
          </p>
        </Grid>
        <Grid item xs={12}>
          <p style={{ color: "red" }}>{error}</p>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={onSubmitHandle}>
            <TextField
              id=""
              label=""
              variant="outlined"
              color="primary"
              margin="none"
              sizes="small"
              name="email"
              placeholder="Email Address"
              onChange={handleAuthField}
              //  value={oke}
            />
            <br />
            <Button
              variant="contained"
              style={{ marginTop: "20px", backgroundColor: "grey" }}
              color="primary"
              type="submit"
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
