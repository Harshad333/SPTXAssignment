import React from "react";
import Card from "@mui/material/Card";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const SectionCard = () => {
  return (
    <div
      style={{
        marginTop: 20,
      }}
    >
      <Card
        style={{
          backgroundColor: "#191B20",
          alignContent: "center",
          fontFamily: "Poppins",
          fontSize: 14,
          padding: 15,
          fontWeight: "bold",
          display: "flex",
          flexDirection: "row",
          paddingInline: 10,
          justifyContent: "space-between",
          borderRadius: 15,
        }}
      >
        <div>
          <div style={{ color: "white", marginBottom: 10 }}>Your rewards</div>
          <div style={{ color: "white", fontSize: 25, marginBottom: 10 }}>
            $ 0.26231428
          </div>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <div className="button button-1">Tutorial</div>
            <div className="button button-1">$10 BNB</div>
            <div className="button button-1">$210 BTC</div>
          </div>
        </div>

        <div style={{ alignSelf: "center" }}>
          <div
            style={{
              color: "white",
              alignContent: "center",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#3772FF",
              padding: 8,
              borderRadius: 6,
              marginRight: 30,
            }}
          >
            <OpenInNewIcon style={{ fontSize: 20 }} />
            <div style={{ marginInline: 5 }}>Custom link</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SectionCard;
