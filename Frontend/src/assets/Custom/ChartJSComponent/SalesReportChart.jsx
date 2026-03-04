import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const SalesReportChart = ({
  lineData = [45, 52, 38, 42, 35, 65],
  lineColor = "#2563eb",
  barData = [55, 85, 45, 25, 60, 90],
  barColors = [
    "#3b82f6", // Solid Blue
    "#3b82f6", // Solid Blue
    "#bfdbfe", // Light Blue
    "#bfdbfe", // Light Blue
    "#3b82f6", // Solid Blue
    "#bfdbfe", // Light Blue
  ],
  timeRange = "weekly",
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const getLabels = () => {
    const now = new Date();

    // Weekly (static)
    const weekly = ["S", "M", "W", "T", "F", "S"];

    // Monthly → current month + 3 previous months
    const monthly = Array.from({ length: 4 }, (_, i) => {
      const date = new Date(now.getFullYear(), now.getMonth() - (3 - i), 1);
      return date.toLocaleString("default", { month: "short" });
    });

    // Yearly → current year + 3 previous years
    const yearly = Array.from({ length: 4 }, (_, i) => {
      return now.getFullYear() - (3 - i);
    });

    return { weekly, monthly, yearly };
  };

  const Labels = getLabels();

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      data: {
        labels: Labels[timeRange],
        datasets: [
          {
            type: "line",
            label: "Sales Line",
            data: [...lineData],
            borderColor: lineColor,
            borderWidth: 2,
            pointBackgroundColor: lineColor,
            pointRadius: 4,
            tension: 0.4,
            fill: false,
            order: 1,
            cubicInterpolationMode: "monotone",
          },
          {
            type: "bar",
            label: "Sales Volume",
            data: [...barData],
            backgroundColor: barColors,
            borderRadius: 10,
            borderSkipped: false,
            maxBarThickness: 60,
            order: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        animation: {
          duration: 1200,
          easing: "easeInOutCubic",
        },

        transitions: {
          active: {
            animation: {
              duration: 1200,
            },
          },
        },

        plugins: {
          legend: { display: false },
        },

        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: { color: "#9ca3af", font: { weight: "bold" } },
          },
          y: {
            display: true,
            grid: {
              color: "#f3f4f6",
              drawTicks: false,
            },
            border: { display: false },
            ticks: { display: false },
          },
        },
      },
    });

    return () => {
      chartInstance.current?.destroy();
      chartInstance.current = null;
    };
  }, []); // ✅ empty dependency

  useEffect(() => {
    if (!chartInstance.current) return;

    const chart = chartInstance.current;

    // Update labels if timeRange changed
    chart.data.labels = Labels[timeRange];

    // Update line dataset
    chart.data.datasets[0].data = [...lineData];
    chart.data.datasets[0].borderColor = lineColor;
    chart.data.datasets[0].pointBackgroundColor = lineColor;

    // Update bar dataset
    chart.data.datasets[1].data = [...barData];
    chart.data.datasets[1].backgroundColor = barColors;

    chart.update();
  }, [lineData, barData, timeRange]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: "200px", marginTop: "auto" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default SalesReportChart;
