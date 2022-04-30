import React, { useState } from "react";
import Chart from "react-apexcharts";

function Third(){
    const options = {
        labels:['A', 'B', 'C', 'D', 'E'] 
    }
      const series = [44, 48, 41, 17, 8]
   
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="pie"
              width="300"
            />
          </div>
        </div>
      </div>
    );
  }

export default Third;