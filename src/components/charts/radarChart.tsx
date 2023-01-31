import React from "react";
import ReactECharts from "echarts-for-react";

const RadarChart: React.FC<{
  trackFeatures: SpotifyApi.AudioFeaturesResponse;
}> = ({ trackFeatures }) => {
  const {
    acousticness,
    danceability,
    energy,
    instrumentalness,
    liveness,
    speechiness,
    valence,
  } = trackFeatures;

  const items = [
    acousticness,
    danceability,
    energy,
    instrumentalness,
    liveness,
    speechiness,
    valence,
  ];

  const options = {
    //color: ["#67F9D8", "#FFE434", "#56A3F1", "#FF917C"],
    title: {
      show: false,
      text: "",
    },
    legend: { show: false },
    tooltip: {},
    radar: [
      {
        indicator: [
          { text: "acousticness", max: 1 },
          { text: "danceability", max: 1 },
          { text: "energy", max: 1 },
          { text: "instrumentalness", max: 1 },
          { text: "liveness", max: 1 },
          { text: "speechiness", max: 1 },
          { text: "valence", max: 1 },
        ],
        center: ["50%", "50%"],
        radius: 120,
        startAngle: 90,
        //splitNumber: 4,
        //shape: "circle",
        axisName: {
          color: "#428BD4",
        },
        splitArea: {
          areaStyle: {
            color: ["#77EADF", "#26C3BE", "#64AFE9", "#428BD4"],
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowBlur: 10,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(211, 253, 250, 0.8)",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(211, 253, 250, 0.8)",
          },
        },
      },
    ],
    series: [
      {
        type: "radar",
        tooltip: {
          trigger: "item",
        },
        areaStyle: {},
        itemStyle: {
          color: "#7658d1",
        },
        data: [
          {
            value: items,
            name: "Features",
          },
        ],
      },
    ],
  };

  return <ReactECharts option={options} style={{ width: "400px" }} />;
};

export default RadarChart;
