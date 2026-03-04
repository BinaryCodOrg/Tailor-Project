import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const SemiCircleChart = ({
  totalCount = "289K",
  label = "Total sell count",
  data = [60, 40],
  Colors = ["#3b82f6", "#93c5fd"],
  chartHeight = "auto",
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [...data],
            backgroundColor: Colors,
            borderWidth: 0,
            borderRadius: 15,
            cutout: "70%",
            spacing: 10,
          },
        ],
      },
      options: {
        rotation: 240,
        circumference: 240,
        responsive: true,
        maintainAspectRatio: false,

        animation: {
          duration: 1200,
          easing: "easeInOutCubic",
        },

        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
    });

    return () => {
      chartInstance.current?.destroy();
      chartInstance.current = null;
    };
  }, []); // ← IMPORTANT: empty dependency

  useEffect(() => {
    if (!chartInstance.current) return;

    const chart = chartInstance.current;

    chart.data.datasets[0].data = [...data];

    chart.update("active");
  }, [data]);

  return (
    <div
      style={{
        width: "100%",
        height: chartHeight,
        position: "relative",
        margin: "0 auto",
      }}
    >
      <canvas ref={chartRef}></canvas>

      {/* Centered Text Overlay */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: "bold",
            color: "#1f2937",
          }}
        >
          {totalCount}
        </h2>
        <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>{label}</p>
      </div>
    </div>
  );
};

export default SemiCircleChart;
