import React from "react";
import ReactECharts from "echarts-for-react";

const KEYS = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
const MODES = ["No Result", "Minor", "Major"];

const AudioSectionsChart: React.FC<{
  sections: SpotifyApi.AudioAnalysisObject["sections"];
}> = ({ sections }) => {
  const timeList: number[] = [];
  const tempoList: number[] = [];
  const loudnessList: number[] = [];
  const keys: number[] = [];
  const modes: number[] = [];

  sections.forEach((section) => {
    timeList.push(Math.round(section.start * 100) / 100);
    tempoList.push(section.tempo);
    //TODO: add - mark infront of loudness tooltip
    loudnessList.push(section.loudness * -1);
    keys.push(section.key);
    modes.push(section.mode);
  });

  const option = {
    title: {
      text: "Sections",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        animation: false,
      },
    },
    legend: {
      data: ["Tempo", "Key", "Mode", "Loudness"],
      left: 10,
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    axisPointer: {
      link: [
        {
          xAxisIndex: "all",
        },
      ],
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 0,
        end: 100,
        xAxisIndex: [0, 1],
      },
      {
        type: "inside",
        realtime: true,
        start: 30,
        end: 70,
        xAxisIndex: [0, 1],
      },
    ],
    grid: [
      {
        left: 60,
        right: 50,
        height: "35%",
      },
      {
        left: 60,
        right: 50,
        top: "55%",
        height: "35%",
      },
      {
        left: 60,
        right: 50,
        height: "35%",
      },
      {
        left: 60,
        right: 50,
        height: "35%",
      },
    ],
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLine: { onZero: true },
        data: timeList,
      },
      {
        gridIndex: 1,
        type: "category",
        boundaryGap: false,
        axisLine: { onZero: true },
        data: timeList,
        position: "top",
        show: false,
      },
      {
        gridIndex: 2,
        type: "category",
        boundaryGap: false,
        axisLine: { onZero: true },
        data: timeList,
        show: false,
      },
      {
        gridIndex: 3,
        type: "category",
        boundaryGap: false,
        axisLine: { onZero: true },
        data: timeList,
        show: false,
      },
    ],
    yAxis: [
      {
        name: "Tempo(BPM)",
        type: "value",
      },

      {
        gridIndex: 1,
        name: "Loudness(dB)",
        type: "value",
        inverse: true,
      },
      {
        gridIndex: 2,
        name: "Key",
        type: "value",
        position: "right",
        max: 11,
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#7658d1",
          },
        },
        axisLabel: {
          formatter: function (value: number) {
            return KEYS[value];
          },
        },
      },
      {
        gridIndex: 3,
        name: "Mode",
        type: "value",
        position: "left",
        offset: -50,
        max: 1,
        min: -1,
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#26C3BE",
          },
        },
        axisLabel: {
          formatter: function (value: number) {
            return MODES[value + 1];
          },
        },
      },
    ],
    series: [
      {
        name: "Tempo",
        type: "line",
        symbolSize: 8,
        data: tempoList,
        itemStyle: { color: "#f5c998", width: 4 },
      },
      {
        name: "Loudness",
        type: "line",
        xAxisIndex: 1,
        yAxisIndex: 1,
        symbolSize: 8,
        data: loudnessList,
      },
      {
        name: "Key",
        type: "line",
        symbolSize: 8,
        xAxisIndex: 2,
        yAxisIndex: 2,
        data: keys,
        itemStyle: { color: "#7658d1", width: 4 },
      },
      {
        name: "Mode",
        type: "line",
        symbolSize: 8,
        xAxisIndex: 3,
        yAxisIndex: 3,
        data: modes,
        itemStyle: { color: "#26c3bf", width: 4 },
      },
    ],
  };

  return <ReactECharts option={option} style={{ width: "100%" }} />;
};

export default AudioSectionsChart;
