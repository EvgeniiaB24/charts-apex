import React, { useState } from "react";
import Chart from "react-apexcharts";

function Sixth(){
    const options = {
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        },
        stroke: {
            curve:"smooth" //"stepline"
        }

  }
      const series = [
        
          {name: "series-1",
          type:"bar",
              data: [30, 40, 45, 50, 49, 60, 70, 91]},

              {name: "series-2",
              type:"line",
            data: [35, 48, 95, 60, 59, 90, 30, 89]}     
]
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="line"
              width="300"
            />
          </div>
        </div>
      </div>
    );
  }

export default Sixth;