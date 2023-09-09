import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { sortByOrderNumber } from "utils/sortByOrderNumber";
import { useIsMobile } from "hooks/useMobile";
import useTranslation from "next-translate/useTranslation";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

export default function CTab({
  tabList,
  value = 0,
  setValue = () => {},
  handleCustomClick = () => {},
  translation = "common"
}) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const ipod = useIsMobile("ipod");
  const { t } = useTranslation(translation);

  const customization = {
    "& .tabs": {
      gap: "50px",
      display: "flex",
    },
    "& .MuiButtonBase-root": {
      background: "#000000",
      borderRadius: "30px",
      color: "white",
      textTransform: "none",
      fontSize: "14px",
      fontWight: "500",
      padding: "0 20px",
      marginRight: "16px",
      textAlign: "left",
      height: "48px",
    },
    "& .MuiButtonBase-root, & .MuiTab-root": {
      maxWidth: "auto",
    },
    "& .Mui-selected": {
      color: "#fff !important",
    },
    "& .MuiTabs-indicator": {
      borderRadius: "30px",
      backgroundColor: "#5122D6",
      height: "100%",
    },
  
  };

  return (
    <Box sx={{ width: "100%" }} id="CTabID">
      <Box sx={customization}>
        <Tabs
          value={value}
          onChange={handleChange}
          // TabIndicatorProps={{
          //   style: { display: "none" },
          // }}
          variant="scrollable"
          scrollButtons={ipod ? false : "auto"}
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {tabList?.map((tab, ind) => (
            <Tab
              disableRipple
              key={ind}
              onClick={() => handleCustomClick(tab)}
              sx={{
                "& .MuiButtonBase-root, & .MuiTab-root": {
                  maxWidth: "auto",
                },
              }}
              label={<p className="z-[2] relative">{t(tab?.name, `${translation}:${tab?.name}`)}</p>}
              {...a11yProps(tab.id)}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
