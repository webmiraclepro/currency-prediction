import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class WidgetChart2 extends Component {
  render() {
    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
      ],

      datasets: [
        {
          label: "Sales Stats",
          borderColor: "transparent",
          pointBackgroundColor: "#FFAB2D",
          pointBorderColor: "#FFAB2D",
          borderWidth: 4,
          borderRadius: 10,
          pointHoverBackgroundColor: "#FFAB2D",
          pointHoverBorderColor: "#FFAB2D",
          backgroundColor: "rgba(54, 147, 255, 1)",
          data: [10, 30, 20, 30, 20, 40, 30, 20, 35],
        },
      ],
    };

    const options = {
      title: {
        display: !1,
      },
      tooltips: {
        intersect: !1,
        mode: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },

      legend: {
        display: !1,
      },
      responsive: !0,
      maintainAspectRatio: !1,
      hover: {
        mode: "index",
      },
      scales: {
        xAxes: [
          {
            display: !1,
            gridLines: !1,
            scaleLabel: {
              display: !0,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: !1,
            gridLines: !1,
            scaleLabel: {
              display: !0,
              labelString: "Value",
            },
            ticks: {
              beginAtZero: !0,
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
          borderWidth: 0,
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 5,
          bottom: 0,
        },
      },
    };
    return (
      <>
        <Line
          data={data}
          options={options}
          height={this.props.height ? this.props.height : 120}
        />
      </>
    );
  }
}

export default WidgetChart2;
