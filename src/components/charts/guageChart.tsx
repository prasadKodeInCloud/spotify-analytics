import React from "react";
import ReactECharts from "echarts-for-react";
import { GuargeInput } from "@/types/chart";

const GuageChart: React.FC<{
  params: GuargeInput;
}> = ({ params }) => {
  const option = {
    series: [
      {
        itemStyle: { color: params.color || "#7658d1", width: 4 },
        startAngle: 180,
        endAngle: 0,
        min: params.min,
        max: params.max,
        name: params.name,
        type: "gauge",
        progress: {
          show: true,
          width: 4,
        },
        pointer: {
          width: 4,
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 2,
          },
        },
        detail: {
          formatter: "{value} dB",
          fontSize: 14,
        },
        data: [
          {
            value: params.value,
            name: params.name,
          },
        ],
      },
    ],
  };

  return <ReactECharts option={option} style={{ width: "100%" }} />;
};

export default GuageChart;
