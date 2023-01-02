import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Dashboard1.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="Dashboardfullscreen"
    >
      {value === index && (
        <Box className="DashboardBox" sx={{ p: 3 ,height:"calc(100% - 84px)"}}>
          <Typography sx={{height:"100%"}}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  let name = "",
    email = "",
    techId = "",
    phoneNumber = "",
    college = "";
  name = "Pickachu";
  email = "adsf@gmail.com";
  techId = "asd123";
  phoneNumber = "1234567890";
  college = "Jawarharlal Nehru University";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ color: "white" }}
        >
          <Tab label="Profile" {...a11yProps(0)} sx={{ color: "white" }} />
          <Tab
            label="Registered WorkShops"
            {...a11yProps(1)}
            sx={{ color: "white" }}
          />
          <Tab
            label="Registerd Competitions"
            {...a11yProps(2)}
            sx={{ color: "white" }}
          />
        </Tabs>
      </Box >
      <TabPanel value={value} index={0} >
        <div className="Dashboard">
          <div className="top"></div>
          <div className="content">
            <div className="image">
              <img
                src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                alt="default"
                srcset=""
              />
            </div>
            <div className="text">
              <h1>
                Hello <span>{name}</span>!!
              </h1>
              <div className="info">
                <span>
                  <span>techId</span>: {techId} <br />
                </span>
                <span>
                  <span>emailId</span>: {email} <br />
                </span>
                <span>
                  <span>phone</span>: {phoneNumber} <br />
                </span>
                <span>
                  <span>college</span>: {college}
                </span>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

// import React from "react";
// import "./Dashboard1.css";

// const Dashboard1 = () => {
//   let name = "",
//     email = "",
//     techId = "",
//     phoneNumber = "",
//     college = "";
//   name = "Pickachu";
//   email = "adsf@gmail.com";
//   techId = "asd123";
//   phoneNumber = "1234567890";
//   college = "Jawarharlal Nehru University";

//   return (
//     <>
//       <div className="Dashboard">
//         <div className="top"></div>
//         <div className="content">
//           <div className="image">
//             <img
//               src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
//               alt="default"
//               srcset=""
//             />
//           </div>
//           <div className="text">
//             <h1>
//               Hello <span>{name}</span>!!
//             </h1>
//             <div className="info">
//               <span>
//                 <span>techId</span>: {techId} <br />
//               </span>
//               <span>
//                 <span>emailId</span>: {email} <br />
//               </span>
//               <span>
//                 <span>phone</span>: {phoneNumber} <br />
//               </span>
//               <span>
//                 <span>college</span>: {college}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard1;
