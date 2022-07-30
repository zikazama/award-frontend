import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Box, Chip, Typography } from "@mui/material";

export default function Item() {
  return (
    <>
      <Card sx={{ minWidth: 275, margin: "30px", marginBottom: "0px" }}>
        <CardContent>
          <div style={{ minHeight: "80px" }}>
            <Box display="flex" justifyContent="flex-end">
              <Chip
                label="Vouchers"
                color="primary"
                style={{ backgroundColor: "blue" }}
              />
            </Box>
          </div>
        </CardContent>
        <CardActions>
          <div size="small">500.000 Poin</div>
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
        Gift Card IDR 1.000.000
      </Typography>
    </>
  );
}
