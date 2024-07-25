import React, { useState } from "react";

const Chart = ({ data }) => {
  function Bar({ value, maxValue }) {
    const heightPercentage = (value / maxValue) * 100;
    return (
      <div
        className="bg-blue-500 mx-2 rounded-t-lg"
        style={{ width: "40px", height: `${heightPercentage}%` }}
      ></div>
    );
  }

  function BarChart({ data }) {
    const maxValue = Math.max(...data);
    return (
      <div className="flex items-end h-[50px]" style={{ width: "120px" }}>
        {data.map((value, index) => (
          <Bar key={index} value={value} maxValue={maxValue} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex">
      <BarChart data={data} />
    </div>
  );
};

export default Chart;
