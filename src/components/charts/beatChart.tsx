import React from "react";
import ReactECharts from "echarts-for-react";

const BeatChart: React.FC<{
  trackAnalytics: SpotifyApi.AudioAnalysisObject;
}> = ({ trackAnalytics }) => {
  const bars = trackAnalytics.bars;
  const data: number[] = [0, 1, 1];
  const timeList: number[] = [
    0,
    bars[0].start,
    bars[0].start + bars[0].duration,
  ];
  let diff;

  for (let i = 1; i < bars.length; i++) {
    diff = bars[i].start - (bars[i - 1].start + bars[i - 1].duration);
    if (diff > 0) {
      timeList.push(diff);
      data.push(0);
    }

    timeList.push(bars[i].start);
    data.push(1);
    timeList.push(bars[i].start + bars[i].duration);
    data.push(1);
  }

  const option = {
    title: {
      text: "Beats",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Beats"],
      show: false,
    },

    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      data: timeList,
      show: false,
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        name: "Beats",
        type: "line",
        step: "start",
        data,
        itemStyle: { color: "#26c3bf", width: 1 },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ width: "100%", height: "250px" }} />
  );
};

export default BeatChart;
