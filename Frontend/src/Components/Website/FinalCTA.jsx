import React from "react";
import { Button } from "antd";

const FinalCTA = () => {
  return (
    <div
      style={{
        background: "#2563eb",
        padding: 100,
        textAlign: "center",
        color: "#fff",
      }}
    >
      <h2>Ready to Transform Your Tailoring Business?</h2>
      <Button
        size="large"
        style={{
          marginTop: 20,
          background: "#fff",
          color: "#2563eb",
          border: "none",
        }}
      >
        Start Free Today
      </Button>
    </div>
  );
};

export default FinalCTA;
