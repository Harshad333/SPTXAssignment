import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


export default function ContentCard(props:any) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>{props?.content}</CardContent>
    </Card>
  );
}
