import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import GridViewIcon from "@mui/icons-material/GridView";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import ContentCard from "./Card";
import Section from "./Section";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="header" style={{ display: "flex", flexDirection: "row" }}>
        <div onClick={() => handleDrawerOpen()}>
          <MenuIcon style={{ fontSize: 30 }} />
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 20,
            fontFamily: "Poppins",
            width: "100%",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </div>
      <Box color={"black"} sx={{ display: "flex", backgroundColor: "black" }}>
        <CssBaseline />

        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "black",
            },
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: "#3772FF",
                  color: "white",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginInline: 5,
                }}
              >
                N
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                }}
              >
                Name
              </div>
            </div>
            <IconButton
              style={{ color: "#808191", marginLeft: 30 }}
              onClick={handleDrawerClose}
            >
              {theme.direction === "ltr" ? (
                <ArrowBackOutlinedIcon />
              ) : (
                <ArrowForwardOutlinedIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              { title: "Home", icon: <GridViewIcon /> },
              { title: "Section 1", icon: <InsertChartOutlinedIcon /> },
              { title: "Section 2", icon: <CandlestickChartOutlinedIcon /> },
              { title: "Section 3", icon: <AutoGraphOutlinedIcon /> },
              { title: "Section 4", icon: <CurrencyExchangeOutlinedIcon /> },
              { title: "Section 5", icon: <LayersOutlinedIcon /> },
              { title: "Section 6", icon: <PieChartOutlinedIcon /> },
              { title: "Section 7", icon: <ShareOutlinedIcon /> },
              { title: "Section 8", icon: <SignalCellularAltOutlinedIcon /> },
              { title: "Documentation", icon: <ArticleOutlinedIcon /> },
            ].map((obj, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <div
                    style={{
                      color: "#808191",
                      flexDirection: "row",
                      display: "flex",
                    }}
                  >
                    <div style={{ marginRight: 10, color: "808191" }}>
                      {obj.icon}
                    </div>
                    <div style={{ fontFamily: "Inter", fontWeight: 500 }}>
                      {obj.title}
                    </div>
                  </div>

                  {/* <ListItemIcon>{obj.icon}</ListItemIcon> */}
                  {/* <ListItemText primary={obj.title} /> */}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <div
            style={{ display: "flex", flexDirection: "row", marginInline: 10 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#353945",
                marginRight: 10,
                paddingTop: 5,
                paddingBottom: 5,
                paddingInline: 15,
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 24 / 2,
                  backgroundColor: "#3772FF",
                  color: "white",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginInline: 5,
                }}
              >
                N
              </div>
              <div style={{ color: "white" }}>$0.90 </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 5,
                paddingBottom: 5,
                paddingInline: 15,

                borderRadius: 10,
                backgroundColor: "#A3E3FF",
                color: "#3772FF",
              }}
            >
              Buy $XYZ
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // backgroundColor: "red",
              padding: 10,
              alignItems: "center",
            }}
          >
            {/* <div style={{ color: "#808191" }}> */}
            <LanguageIcon style={{ color: "#808191", fontSize: 35 }} />
            {/* </div> */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#353945",
                paddingInline: 5,
                width: 70,
                borderRadius: 20,
                marginInline: 10,
                height: 32,
              }}
            >
              <NightsStayIcon style={{ color: "#808191", fontSize: 25 }} />
              <div
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 25 / 2,
                  backgroundColor: "  #3772FF",
                }}
              />
            </div>
          </div>
        </Drawer>
        <Main open={open}>
          <Section />
        </Main>
      </Box>
    </div>
  );
}
