import React, { useState } from "react";
import Card from "@mui/material/Card";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import SectionCard from "./common/sectionCard";
import ReferalLinkCard from "./common/ReferalLinkCard";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

type TListTab = "First Tab" | "Second Tab";

function Section() {
  const [data, setData] = useState<any>([]);
  const LIST_TAB: { [key: string]: TListTab } = {
    FIRST: "First Tab",
    SECOND: "Second Tab",
  };
  const [activeListTab, setActiveListTab] = useState(LIST_TAB.FIRST);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleActiveListTab = (tabName: any) => {
    setActiveListTab(tabName);
  };
  const [showTitle, setShowTitle] = useState<boolean>(true);


  React.useEffect(() => {
    setIsLoading(true)
    fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
    setIsLoading(false)
  }, []);

  function capitalizeFirstLetter(string: any) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function account_(string: any) {
    return `${string.substr(0, 5)}..${string.substr(string.length - 7, 7)}`;
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "100%", paddingRight: 35 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              borderBottomWidth: 3,
              borderColor: "#3772FF",

              borderBottomStyle: "solid",
              color: "#fff",
              fontSize: 22,
              fontWeight: "bold",

              fontFamily: "Poppins",
            }}
          >
            Section
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              color: "white",
              alignContent: "center",
              backgroundColor: "#191B20",
              padding: 10,
              borderRadius: 10,
              justifyContent: "space-evenly",
            }}
          >
            <AccountBalanceWalletOutlinedIcon
              style={{ color: "#3772FF", marginRight: 10 }}
            />
            <div style={{ marginRight: 10 }}>0.2 $XYZ</div>

            <Card
              style={{
                backgroundColor: "#A3E3FF",
                color: "#3772FF",
                alignContent: "center",
                width: 70,
                paddingInline: 5,
                display: "flex",
                justifyContent: "center",
              }}
            >
              Tier 1
            </Card>
          </div>
        </div>
        {/* =====================================card1========================================================== */}
        {showTitle ? (
          <div
            style={{
              marginTop: 20,
              position: "relative",
            }}
          >
            <input
              type="image"
              alt="photo"
              src={require("../assets/icons/logo2.png")}
              style={{
                height: 220,
                width: 220,
                position: "absolute",
                bottom: -60,
                right: 50,
              }}
            />
            <Card
              style={{
                backgroundColor: "#A3E3FF",
                alignContent: "center",
                fontFamily: "Poppins",
                fontSize: 18,
                padding: 30,
                fontWeight: "bold",
                borderRadius: 10,
              }}
            >
              <div className="lorem-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  fontFamily: "Poppins",
                  padding: 2,
                  width: 80,
                  textAlign: "center",
                  borderRadius: 5,
                  marginTop: 10,
                }}
              >
                Tutorial
              </div>
              <div className="closeIcon" onClick={() => setShowTitle(false)}>
                <CloseIcon />
              </div>
            </Card>
          </div>
        ) : null}
        <SectionCard />
        {/* ===========================================card2==================================================== */}
        <ReferalLinkCard />

        <div
          className="tab-wrapper"
          style={{ display: "flex", flexDirection: "row", marginTop: 30 }}
        >

          {Object.keys(LIST_TAB).map((key) => (
            <div
              className={`Tab ${LIST_TAB[key] === activeListTab ? `active-tab` : ''}`}
              id="single-tab"
              onClick={() => handleActiveListTab(LIST_TAB[key])}
              key={key}
            >
              {LIST_TAB[key]}
            </div>
          ))}

        </div>
        <div
          className="tab-heading"
          style={{
            width: "100%",
            backgroundColor: "#191B20",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Poppins",
            borderRadius: 10,
            marginTop: 20,
            color: "white",
            fontSize: 14,
            paddingInline: 80,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <p className="mb-0">ASSET</p>
          <p className="mb-0">AMOUNT</p>
          <p className="mb-0">USER ACCOUNT</p>
          <p className="mb-0">REFERRAL EARNING</p>
        </div>
        {isLoading ?
          <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="inherit" />
          </Stack>
          :
          <>
            {data?.data?.map((obj: any, index: any) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    backgroundColor: "#191B20",
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: "Poppins",
                    borderRadius: 10,
                    marginTop: 5,
                    color: "white",
                    fontSize: 14,
                    paddingInline: 50,
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}
                >
                  <div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <input
                        type="image"
                        alt="photo"
                        src={obj.img}
                        style={{
                          width: 40,
                          height: 40,
                          marginInline: 4,
                          alignSelf: "center",
                          display: "flex",
                        }}
                      />

                      <div>
                        {" "}
                        <div>{obj.asset}</div>
                        <div
                          style={{
                            color: "grey",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          {obj.type}
                          <div
                            style={{
                              backgroundColor: "grey",
                              borderRadius: 10,
                              marginLeft: 5,
                              color: "white",
                              fontSize: 10,
                              textAlign: "center",
                              display: "flex",
                              flexDirection: "row",
                              paddingInline: 2,
                            }}
                          >
                            <input
                              type="image"
                              alt="photo"
                              src={obj.chain.img}
                              style={{
                                width: 10,
                                height: 10,
                                marginInline: 4,
                                alignSelf: "center",
                                display: "flex",
                              }}
                            />
                            {obj.chain.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>{obj.amount} BNB</div>
                    <div style={{ color: "grey" }}>
                      {capitalizeFirstLetter(obj.state)}
                    </div>
                  </div>
                  <div>
                    <div>{account_(obj.user)}</div>
                  </div>
                  <div>
                    <div>{obj.referral_earnings}BNB</div>
                    <div
                      style={{
                        color: "grey",
                        alignContent: "center",
                        display: "flex",
                      }}
                    >
                      View on BSC Scan{" "}
                      <OpenInNewIcon style={{ fontSize: 20, marginLeft: 5 }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </>}
      </div>
      <div style={{ width: 3, backgroundColor: "#242731" }} />

      <div
        style={{
          width: 450,
          paddingInline: 35,
          borderLeftWidth: 5,
          borderStyle: "solid",
        }}
      >
        {/* drop down */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <div
            className="avalance-dropdown"
            style={{
              marginRight: 20,
            }}
          >
            <div> Avalanche</div>
            <KeyboardArrowDownIcon style={{ fontSize: 25 }} />
          </div>
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              borderColor: "#3772FF",
              borderStyle: "solid",
              borderWidth: 3,
              padding: 8,
              borderRadius: 10,
            }}
          >
            <AccountBalanceWalletOutlinedIcon
              style={{ color: "#3772FF", marginRight: 10 }}
            />
            <div> 0xf6...1353</div>
            <KeyboardArrowDownIcon style={{ fontSize: 25 }} />
          </div>
        </div>

        {/*link*/}

        <div
          style={{
            alignItems: "center",
            display: "flex",
            color: "white",
            fontFamily: "Poppins",
            fontSize: 20,
          }}
        >
          <ArrowBackOutlinedIcon style={{ marginRight: 10 }} />
          Custom link
        </div>

        <div
          style={{
            alignItems: "center",
            fontFamily: "Poppins",
            color: "white",
            marginTop: 35,
          }}
        >
          https://testnet.xyz.xyz/trade?ref=
        </div>
        <input
          type={"text"}
          placeholder="ENTER"
          style={{
            backgroundColor: "#242731",
            borderWidth: 0,
            height: 40,
            width: "100%",
            borderRadius: 10,
            fontFamily: "Poppins",
            marginTop: 25,
            paddingLeft: 10,
            color: "white",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 25,
            width: "100%",
          }}
        >
          <div style={{ alignSelf: "center" }}>
            <div className="button2">
              <OpenInNewIcon style={{ fontSize: 20 }} />
              <div style={{ marginInline: 5 }}>Custom link</div>
            </div>
          </div>
          <div style={{ alignSelf: "center" }}>
            <div className="button1">
              <LogoutIcon style={{ fontSize: 20 }} />
              <div style={{ marginInline: 5 }}>Cancel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
