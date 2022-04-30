import React from "react";
import Chart from "react-apexcharts";

function Eigth(){

const guestSeries = [
    {
      name: "Guests",
      data: [19, 22, 20, 26],
    },
  ];
  const guestOption = {
    chart: {
      id: "guest",
      group: "social",
    },
    xaxis: {
      categories: ["2019-05-01", "2019-05-02", "2019-05-03", "2019-05-04"],
    },
  };
  //create series and options for our 'subscribers' data
  const subSeries = [
    {
      name: "Subs",
      data: [103, 105, 98, 83],
    },
  ];
  const subOptions = {
    chart: {
      id: "Subs",
      group: "social", //group name same as guestOptions
    },
    xaxis: {
      categories: ["2019-05-01", "2019-05-02", "2019-05-03", "2019-05-04"],
    },
  };
  return (
    <div>
      <Chart type="line" series={subSeries} options={subOptions} width={300}  />
      <Chart type="line" series={guestSeries} options={guestOption} width={300} />
    </div>
  );
  }
  export default Eigth;