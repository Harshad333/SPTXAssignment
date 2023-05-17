import React from "react";
import Card from "@mui/material/Card";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import Tooltip from '@mui/material/Tooltip';

const ReferalLinkCard = () => {
  const card3 = () => {
    return (
      <div
        style={{
          marginTop: 20,
        }}
      >
        <Card className="Card card-container">
          <div style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            12.5% of fee
          </div>
          <div
            style={{
              color: "#808191",
              fontSize: 14,
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            Your Referral Link for xyz
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              marginBottom: 20,
            }}
          >
            <Tooltip title="Copy URL">
              <div className="button4 cursor-pointer">
                https://unityexchange.design{" "}
                <ContentCopyOutlinedIcon style={{ marginLeft: 35 }}
                  onClick={() => navigator.clipboard.writeText('https://unityexchange.design')} />
              </div>
            </Tooltip>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div style={{ padding: 10 }}> {card3()}</div>
      <div style={{ padding: 10 }}> {card3()}</div>
    </div>
  );
};

export default ReferalLinkCard;
