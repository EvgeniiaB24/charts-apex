import React, { useState,useEffect,useRef } from "react";
import Chart from "react-apexcharts";

function Seven(){

 const [progress,setProgress] = useState(0)   
    let interval = useRef(null)


useEffect(() => {
  interval.current = setInterval(() => {
    setProgress((old) => old + 25);
  }, 1000);
  return () => {
    clearInterval(interval.current);
  };
}, []);


useEffect(() => {
  if (progress < 100) return;
  clearInterval(interval.current);
}, [progress]);

const series = [progress]
const options = {labels: ["Progress"]}

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="radialBar"
              width="300"
            />
          </div>
        </div>
      </div>
    );
  }

export default Seven;