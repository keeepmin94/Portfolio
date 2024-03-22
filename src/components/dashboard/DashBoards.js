import React, { useState, useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";
import DashBoard from "./DashBoard";
import DashGauge from "./DashGauge";

const datas = [
  {
    chartType: "LineChart",
    data: [
      ["Week", "방문자수", "cv download"],
      ["월", 3, 1],
      ["화", 5, 0],
      ["수", 4, 1],
      ["목", 5, 2],
      ["금", 2, 2],
      ["토", 0, 1],
      ["일", 0, 0],
    ],
    options: {
      title: "주간 방문자 수",
      curveType: "function",
      legend: { position: "bottom" },
    },
  },
  {
    chartType: "BarChart",
    data: [
      ["Week", "방문자수", "cv download"],
      ["월", 3, 1],
      ["화", 5, 0],
      ["수", 4, 1],
      ["목", 5, 2],
      ["금", 2, 2],
      ["토", 0, 1],
      ["일", 0, 0],
    ],
    options: {
      title: "월간 방문자 수",
      curveType: "function",
      legend: { position: "bottom" },
    },
  },
];

function DashBoards() {
  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {datas.map((i) => (
          <Grid item xs={12} md={6} key={i}>
            <DashBoard
              data={i.data}
              options={i.options}
              chartType={i.chartType}
            />
          </Grid>
        ))}
      </Grid>
      {/* <Box
        display={"flex"}
        justifyContent={"center"}
        fontSize={"20px"}
        marginY={"3%"}
      >
        <h1>서버 사용량</h1>
      </Box> */}
      {/* <Box width={"100%"} height={"150px"} paddingX={"40%"}>
        <DashGauge />
      </Box> */}
      <DashGauge />
    </Box>
  );
}

export default DashBoards;
