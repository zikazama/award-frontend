import Container from "@mui/material/Container";
import * as React from "react";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function FilterLayout() {
  return (
    <>
      <Container maxWidth="lg" style={{ paddingTop: "20px" }}>
        <Box display="flex" justifyContent="flex-start" flexDirection="column">
          <Chip
            style={{ marginBottom: "15px" }}
            label="Poin: 10000 - 500000"
            variant="outlined"
            color="primary"
            onDelete={{}}
          />
          <Chip
            style={{ marginBottom: "15px" }}
            label="Type: Voucher, Product"
            variant="outlined"
            color="primary"
            onDelete={{}}
          />
          <Button variant="outlined" color="primary">
            Clear All Filter
          </Button>
        </Box>

        <Grid style={{ marginTop: "10px" }} container spacing={1}>
          <Grid item xs={12}>
            <Typography textAlign="left" variant="h6" color="initial">
              Poin Needed
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color="initial">
              IDR 10.000
            </Typography>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color="initial">
              IDR 500.000
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Slider
              min={0}
              max={500000}
              step={10000}
              defaultValue={0}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </Grid>
        </Grid>

        <Grid
          style={{ marginTop: "10px", textAlign: "left" }}
          container
          spacing={1}
        >
          <Grid item xs={12}>
            <Typography textAlign="left" variant="subtitle3" color="initial">
              Awards Type
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              label="All Type"
              control={
                <Checkbox
                  value=""
                  checked={false}
                  onChange={() => {}}
                  color="primary"
                />
              }
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              label="Vouchers"
              control={
                <Checkbox
                  value=""
                  checked={false}
                  onChange={() => {}}
                  color="primary"
                />
              }
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              label="Products"
              control={
                <Checkbox
                  value=""
                  checked={false}
                  onChange={() => {}}
                  color="primary"
                />
              }
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              label="Others"
              control={
                <Checkbox
                  value=""
                  checked={false}
                  onChange={() => {}}
                  color="primary"
                />
              }
            />
          </Grid>
        </Grid>
        <Box
          display="flex"
          margin={2}
          justifyContent="flex-start"
          flexDirection="column"
        >
          <Button variant="contained" color="primary">
            Filter
          </Button>
        </Box>
      </Container>
    </>
  );
}
