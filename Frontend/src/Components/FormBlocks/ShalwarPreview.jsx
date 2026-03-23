import React from "react";
import { motion } from "framer-motion";

const ShalwarPreview = ({ activeField }) => {
  const isActive = (part) =>
    activeField === part ? "highlight" : "outline";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="shalwar-svg-container"
    >
      <svg viewBox="0 0 300 600" className="shalwar-svg">

        {/* Waistband */}
        <path
          d="M80 90 Q150 70 220 90 L220 110 Q150 130 80 110 Z"
          className={isActive("hip")}
        />

        {/* Drawstrings */}
        <line x1="145" y1="110" x2="140" y2="160" className="outline" />
        <line x1="155" y1="110" x2="160" y2="160" className="outline" />

        {/* Left Leg */}
        <path
          d="
          M80 110
          Q60 200 95 350
          Q110 470 120 520
          Q135 535 150 520
          L150 110
          Z"
          className={isActive("length")}
        />

        {/* Right Leg */}
        <path
          d="
          M220 110
          Q240 200 205 350
          Q190 470 180 520
          Q165 535 150 520
          L150 110
          Z"
          className={isActive("length")}
        />

        {/* Center Seam */}
        <path
          d="M150 110 Q150 250 150 520"
          className="outline"
          strokeDasharray="4"
        />

        {/* Thigh Measurement */}
        <line
          x1="105"
          y1="240"
          x2="195"
          y2="240"
          className={isActive("thigh")}
        />

        {/* Bottom / Poncha */}
        <line
          x1="120"
          y1="520"
          x2="180"
          y2="520"
          className={isActive("bottom")}
        />

        {/* Cuffs */}
        <rect
          x="115"
          y="520"
          width="30"
          height="20"
          className={isActive("bottom")}
        />
        <rect
          x="155"
          y="520"
          width="30"
          height="20"
          className={isActive("bottom")}
        />

      </svg>
    </motion.div>
  );
};

export default ShalwarPreview;