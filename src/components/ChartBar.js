import React from "react";
import './ChartBar.css';

function ChartBar(props) {
let barFillHeight = "0%";

if (props.maxValue > 0) {
  barFillHeight = Math.round((props.monthExpense / props.maxValue) * 100) + "%";
}
  return (
    <div className="chartBar">
      <div className="chartBar__inner">
        <div
          className="chartBar__inner__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chartBar__lable">{props.lable}</div>
    </div>
  );
}

export default ChartBar;
