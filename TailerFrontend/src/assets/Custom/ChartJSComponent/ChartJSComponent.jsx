import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const ChartJSComponent = ({ data, options }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef.current) {
      // Destroy the previous chart instance if it exists
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Create a new chart instance
      chartInstance = new Chart(chartRef.current, {
        type: "line",
        data,
        options: {
          ...options,
          responsive: true, // Ensures the chart resizes automatically
          maintainAspectRatio: false, // Ensures the chart fills the container
          plugins: {
            ...options.plugins,
            legend: {
              display: false, // Hide the legend
            },
            tooltip: {
              enabled: true, // Enable tooltips
              callbacks: {
                label: (context) => `Value: ${context.raw}`, // Custom tooltip content
              },
            },
          },
          scales: {
            x: {
              display: false, // Hide X-axis
            },
            y: {
              display: false, // Hide Y-axis
            },
          },
        },
      });
    }

    // Cleanup on component unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data, options]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* Chart Canvas */}
      <div style={{ width: "100%", height: "300px" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default ChartJSComponent;
