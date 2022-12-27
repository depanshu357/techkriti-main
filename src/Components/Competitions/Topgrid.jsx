import React from "react";
import { Grid } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/material";
import SwipeableTemporaryDrawer from "./LeftbarCollapse";
import "./styles.css";

function Topgrid() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="topgrid">
      <Grid container spacing={2}>
        <Grid item md={1}>
          <img src="img/fb.svg" alt="T" />
        </Grid>
        <Grid item md={10}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                sx={{color: "white"}}
                value={value}
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                centered
              >
                <Tab value="one" label="Main" />
                <Tab value="two" label="head1" />
                <Tab value="three" label="head2" />
                <Tab value="four" label="head3" />
              </Tabs>
            </Box>
          </Box>
        </Grid>
        <Grid item md={1}>
          <SwipeableTemporaryDrawer/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Topgrid;