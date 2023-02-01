import React from "react";
import ReactECharts from "echarts-for-react";

const BpmChart: React.FC<{
  tempo: number;
}> = ({ tempo }) => {
  const option = {
    graphic: {
      elements: [
        {
          type: "group",
          left: "left",
          top: "left",
          children: new Array(12).fill(0).map((val, i) => ({
            type: "rect",
            x: i * 20,
            shape: {
              x: 0,
              y: -2,
              width: 5,
              height: 5,
            },
            style: {
              fill: "black",
            },
            keyframeAnimation: {
              duration: (1000 * 60) / tempo,
              delay: i * 0,
              loop: true,
              keyframes: [
                {
                  percent: 0.5,
                  scaleY: 0.3,
                  easing: "cubicIn",
                },
                {
                  percent: 1,
                  scaleY: 1,
                  easing: "cubicOut",
                },
              ],
            },
          })),
        },
      ],
    },
  };

  return <ReactECharts option={option} style={{ height: "5px" }} />;
};

export default BpmChart;
