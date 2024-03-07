// import React, { useState, useEffect } from "react";
// import { Box, Grid, Button } from "@mui/material";
// import { ResponsiveLine } from "@nivo/line";

// const data = [
//   {
//     id: "japan",
//     color: "hsl(11, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 271,
//       },
//       {
//         x: "helicopter",
//         y: 200,
//       },
//       {
//         x: "boat",
//         y: 226,
//       },
//       {
//         x: "train",
//         y: 63,
//       },
//       {
//         x: "subway",
//         y: 185,
//       },
//       {
//         x: "bus",
//         y: 77,
//       },
//       {
//         x: "car",
//         y: 139,
//       },
//       {
//         x: "moto",
//         y: 157,
//       },
//       {
//         x: "bicycle",
//         y: 235,
//       },
//       {
//         x: "horse",
//         y: 107,
//       },
//       {
//         x: "skateboard",
//         y: 53,
//       },
//       {
//         x: "others",
//         y: 181,
//       },
//     ],
//   },
//   {
//     id: "france",
//     color: "hsl(192, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 107,
//       },
//       {
//         x: "helicopter",
//         y: 171,
//       },
//       {
//         x: "boat",
//         y: 181,
//       },
//       {
//         x: "train",
//         y: 6,
//       },
//       {
//         x: "subway",
//         y: 155,
//       },
//       {
//         x: "bus",
//         y: 278,
//       },
//       {
//         x: "car",
//         y: 67,
//       },
//       {
//         x: "moto",
//         y: 207,
//       },
//       {
//         x: "bicycle",
//         y: 186,
//       },
//       {
//         x: "horse",
//         y: 227,
//       },
//       {
//         x: "skateboard",
//         y: 261,
//       },
//       {
//         x: "others",
//         y: 88,
//       },
//     ],
//   },
//   {
//     id: "us",
//     color: "hsl(80, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 183,
//       },
//       {
//         x: "helicopter",
//         y: 232,
//       },
//       {
//         x: "boat",
//         y: 228,
//       },
//       {
//         x: "train",
//         y: 156,
//       },
//       {
//         x: "subway",
//         y: 255,
//       },
//       {
//         x: "bus",
//         y: 244,
//       },
//       {
//         x: "car",
//         y: 47,
//       },
//       {
//         x: "moto",
//         y: 211,
//       },
//       {
//         x: "bicycle",
//         y: 32,
//       },
//       {
//         x: "horse",
//         y: 9,
//       },
//       {
//         x: "skateboard",
//         y: 138,
//       },
//       {
//         x: "others",
//         y: 190,
//       },
//     ],
//   },
//   {
//     id: "germany",
//     color: "hsl(256, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 175,
//       },
//       {
//         x: "helicopter",
//         y: 81,
//       },
//       {
//         x: "boat",
//         y: 79,
//       },
//       {
//         x: "train",
//         y: 127,
//       },
//       {
//         x: "subway",
//         y: 284,
//       },
//       {
//         x: "bus",
//         y: 96,
//       },
//       {
//         x: "car",
//         y: 27,
//       },
//       {
//         x: "moto",
//         y: 41,
//       },
//       {
//         x: "bicycle",
//         y: 291,
//       },
//       {
//         x: "horse",
//         y: 205,
//       },
//       {
//         x: "skateboard",
//         y: 227,
//       },
//       {
//         x: "others",
//         y: 122,
//       },
//     ],
//   },
//   {
//     id: "norway",
//     color: "hsl(201, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 180,
//       },
//       {
//         x: "helicopter",
//         y: 149,
//       },
//       {
//         x: "boat",
//         y: 106,
//       },
//       {
//         x: "train",
//         y: 52,
//       },
//       {
//         x: "subway",
//         y: 65,
//       },
//       {
//         x: "bus",
//         y: 244,
//       },
//       {
//         x: "car",
//         y: 153,
//       },
//       {
//         x: "moto",
//         y: 92,
//       },
//       {
//         x: "bicycle",
//         y: 159,
//       },
//       {
//         x: "horse",
//         y: 163,
//       },
//       {
//         x: "skateboard",
//         y: 92,
//       },
//       {
//         x: "others",
//         y: 145,
//       },
//     ],
//   },
// ];

// function DashBoard() {
//   return (
//     <ResponsiveLine
//       data={data}
//       margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//       xScale={{ type: "point" }}
//       yScale={{
//         type: "linear",
//         min: "auto",
//         max: "auto",
//         stacked: true,
//         reverse: false,
//       }}
//       yFormat=" >-.2f"
//       axisTop={null}
//       axisRight={null}
//       axisBottom={{
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: "transportation",
//         legendOffset: 36,
//         legendPosition: "middle",
//         truncateTickAt: 0,
//       }}
//       axisLeft={{
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: "count",
//         legendOffset: -40,
//         legendPosition: "middle",
//         truncateTickAt: 0,
//       }}
//       pointSize={10}
//       pointColor={{ theme: "background" }}
//       pointBorderWidth={2}
//       pointBorderColor={{ from: "serieColor" }}
//       pointLabelYOffset={-12}
//       enableTouchCrosshair={true}
//       useMesh={true}
//       legends={[
//         {
//           anchor: "bottom-right",
//           direction: "column",
//           justify: false,
//           translateX: 100,
//           translateY: 0,
//           itemsSpacing: 0,
//           itemDirection: "left-to-right",
//           itemWidth: 80,
//           itemHeight: 20,
//           itemOpacity: 0.75,
//           symbolSize: 12,
//           symbolShape: "circle",
//           symbolBorderColor: "rgba(0, 0, 0, .5)",
//           effects: [
//             {
//               on: "hover",
//               style: {
//                 itemBackground: "rgba(0, 0, 0, .03)",
//                 itemOpacity: 1,
//               },
//             },
//           ],
//         },
//       ]}
//     />
//   );
// }

// export default DashBoard;

// ------------
import * as React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";

const Barchart = () => {
  const handle = {
    barClick: (data) => {
      console.log(data);
    },

    legendClick: (data) => {
      console.log(data);
    },
  };

  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <div style={{ width: "800px", height: "500px", margin: "0 auto" }}>
      <ResponsiveBar
        /**
         * chart에 사용될 데이터
         */
        data={[
          { bottle: "365ml", cola: 1200, cidar: 1000, fanta: 1100 },
          { bottle: "500ml", cola: 2200, cidar: 2000, fanta: 2100 },
          { bottle: "1000ml", cola: 3200, cidar: 3000, fanta: 3100 },
        ]}
        /**
         * chart에 보여질 데이터 key (측정되는 값)
         */
        keys={["cola", "cidar", "fanta"]}
        /**
         * keys들을 그룹화하는 index key (분류하는 값)
         */
        indexBy="bottle"
        /**
         * chart margin
         */
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        /**
         * chart padding (bar간 간격)
         */
        padding={0.3}
        /**
         * chart 색상
         */
        colors={["olive", "brown", "orange"]} // 커스터하여 사용할 때
        // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
        /**
         * color 적용 방식
         */
        colorBy="id" // 색상을 keys 요소들에 각각 적용
        // colorBy="indexValue" // indexBy로 묵인 인덱스별로 각각 적용
        theme={{
          /**
           * label style (bar에 표현되는 글씨)
           */
          labels: {
            text: {
              fontSize: 14,
              fill: "#000000",
            },
          },
          /**
           * legend style (default로 우측 하단에 있는 색상별 key 표시)
           */
          legends: {
            text: {
              fontSize: 12,
              fill: "#000000",
            },
          },
          axis: {
            /**
             * axis legend style (bottom, left에 있는 글씨)
             */
            legend: {
              text: {
                fontSize: 20,
                fill: "#000000",
              },
            },
            /**
             * axis ticks style (bottom, left에 있는 값)
             */
            ticks: {
              text: {
                fontSize: 16,
                fill: "#000000",
              },
            },
          },
        }}
        /**
         * axis bottom 설정
         */
        axisBottom={{
          tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
          tickPadding: 5, // tick padding
          tickRotation: 0, // tick 기울기
          legend: "bottle", // bottom 글씨
          legendPosition: "middle", // 글씨 위치
          legendOffset: 40, // 글씨와 chart간 간격
        }}
        /**
         * axis left 설정
         */
        axisLeft={{
          tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
          tickPadding: 5, // tick padding
          tickRotation: 0, // tick 기울기
          legend: "price", // left 글씨
          legendPosition: "middle", // 글씨 위치
          legendOffset: -60, // 글씨와 chart간 간격
        }}
        /**
         * label 안보이게 할 기준 width
         */
        labelSkipWidth={36}
        /**
         * label 안보이게 할 기준 height
         */
        labelSkipHeight={12}
        /**
         * bar 클릭 이벤트
         */
        onClick={handle.barClick}
        /**
         * legend 설정 (default로 우측 하단에 있는 색상별 key 표시)
         */
        legends={[
          {
            dataFrom: "keys", // 보일 데이터 형태
            anchor: "bottom-right", // 위치
            direction: "column", // item 그려지는 방향
            justify: false, // 글씨, 색상간 간격 justify 적용 여부
            translateX: 120, // chart와 X 간격
            translateY: 0, // chart와 Y 간격
            itemsSpacing: 2, // item간 간격
            itemWidth: 100, // item width
            itemHeight: 20, // item height
            itemDirection: "left-to-right", // item 내부에 그려지는 방향
            itemOpacity: 0.85, // item opacity
            symbolSize: 20, // symbol (색상 표기) 크기
            effects: [
              {
                // 추가 효과 설정 (hover하면 item opacity 1로 변경)
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
            onClick: handle.legendClick, // legend 클릭 이벤트
          },
        ]}
      />
    </div>
  );
};

export default Barchart;
