import React from "react";
import { motion } from "framer-motion";

const TrouserPreview = ({ activeField }) => {
  const isActive = (part) => (activeField === part ? "highlight" : "outline");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pent-svg-container"
    >
      <svg viewBox="0 0 320 620" className="pent-svg">
        {/* Waistband */}
        <rect
          x="90"
          y="70"
          width="150"
          height="22"
          rx="6"
          className={isActive("hip")}
        />

        {/* Button */}
        <circle cx="160" cy="81" r="6" className="outline" />

        {/* Belt Loops */}
        <rect x="110" y="70" width="4" height="22" className="outline" />
        <rect x="210" y="70" width="4" height="22" className="outline" />

        {/* Left Leg */}
        <path
          d="
          M95 93
          Q90 220 115 520
          L155 520
          L155 500
          L163 93
          Z"
          className={isActive("length")}
        />

        {/* Right Leg */}
        <path
          d="
          M235 93
          Q235 220 212 520
          L170 520
          L165 200
          L165 93
          Z"
          className={isActive("length")}
        />

        {/* Center Seam */}
        <line
          x1="163"
          y1="105"
          x2="163"
          y2="520"
          className="outline"
          strokeDasharray="4"
        />

        {/* Front Crease Lines */}
        <line
          x1="130"
          y1="200"
          x2="135"
          y2="520"
          className="outline"
          strokeDasharray="3"
        />
        <line
          x1="199"
          y1="200"
          x2="191"
          y2="520"
          className="outline"
          strokeDasharray="3"
        />

        {/* Hip Measurement */}
        <line x1="95" y1="115" x2="235" y2="115" className={isActive("hip")} />

        {/* Thigh Measurement */}
        <line
          x1="124"
          y1="220"
          x2="206"
          y2="220"
          className={isActive("thigh")}
        />

        {/* Bottom Width */}
        <line
          x1="100"
          y1="520"
          x2="225"
          y2="520"
          className={isActive("bottom")}
        />

      </svg>
    </motion.div>
  );
};

export default TrouserPreview;
