import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Box, Chip, Typography } from "@mui/material";
import { useReducer, useEffect, useState } from "react";
import { awardInitialValue, awardReducer } from "../reducers/awardReducer";
import CONSTANTS from "../utils/constants";
import axios from "axios";
import numberWithSeparator from "../utils/numbers";
import Capitalize from "../utils/strings";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

export default function Item() {
  const navigate = useNavigate();

  const [award, dispatchAward] = useReducer(awardReducer, awardInitialValue);
  const [awardState, setAwardState] = useState(award);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${CONSTANTS.API_ROOT_URL}/awards`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data;
        dispatchAward({ type: "init", award: data.rows });
        setAwardState(data.rows);
      })
      .catch((err) => {
        if (err) {
          console.log(err.response.status);
          if (err.response.status !== 200) {
            console.log("logout");
            navigate("/");
          }
        }
      });
  }, []);

  const initAwardHandler = () => {
    dispatchAward({
      type: "init",
      award: "",
    });
  };

  return (
    <>
      {awardState.map((item) => {
        return (
          <div key={item.id}>
            <Card
              sx={{
                minWidth: 275,
                margin: "30px",
                marginBottom: "0px",
                backgroundSize: "cover",
                backgroundImage: `url(${item.imageUrlFull})`,
              }}
            >
              <CardContent>
                <div style={{ minHeight: "80px" }}>
                  <Box display="flex" justifyContent="flex-end">
                    <Chip
                      label={Capitalize(item.type)}
                      color="primary"
                      style={{
                        backgroundColor: CONSTANTS.GET_TYPE_COLOR[item.type],
                      }}
                    />
                  </Box>
                </div>
              </CardContent>
              <CardActions>
                <div size="small">
                  {numberWithSeparator(item.poin)}
                  Poin
                </div>
              </CardActions>
            </Card>
            <Typography
              variant="h6"
              color="initial"
              style={{
                textAlign: "left",
                marginLeft: "30px",
                marginBottom: "0px",
                marginTop: "5px",
              }}
            >
              {item.title}
            </Typography>
          </div>
        );
      })}
    </>
  );
}
