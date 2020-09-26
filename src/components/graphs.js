import React, { useState } from "react";
import Select from "react-select";
import { HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis } from "react-vis";
import "react-vis/dist/style.css";

const selectOptions = [
  { value: "all", label: "All" },
  { value: "socialInteraction", label: "Social Interaction"},
  { value: "communication", label: "Communication"},
  { value: "difficultBehaviour", label: "Difficult Behaviour"},
  { value: "attention", label: "Attention"},
  { value: "sleepQuality", label: "Sleep Quality"},
  { value: "overallMood", label: "Overall Mood"},
];

export const Graphs = (props) => {
  const [selected, setSelected] = useState(selectOptions[0]);

  const data = props.data.map(d => {
    if (selected.value === "all") {
      return {
        x: new Date(d.data.time).getTime(),
        y: d.count,
      }
    } else {
      return {
        x: new Date(d.data.time).getTime(),
        y: d.data[selected.value],
      }
    }
  })

  data.sort((a, b) => a.x - b.x);

  return (
    <>
      <Select
        className="ml-5 mr-5 mb-3"
        options={selectOptions}
        value={selected}
        onChange={option => setSelected(option)} />
      <h3 className="text-center">Trend Over Time</h3>
      <XYPlot xType="time" className="ml-3 mr-auto" width={350} height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="X Axis" />
        <LineSeries data={data} />
      </XYPlot>
    </>
  );
};
