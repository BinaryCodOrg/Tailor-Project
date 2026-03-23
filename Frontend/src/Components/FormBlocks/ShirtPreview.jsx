import React from "react";
import { motion } from "framer-motion";

const ShirtPreview = ({ activeField }) => {
  const isActive = (part) => (activeField === part ? "highlight" : "outline");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="shirt-svg-container p-0"
    >
      <svg viewBox="0 0 300 420" className="shirt-svg">
        {/* LEFT SLEEVE */}
        <path
          d="
            M90 160
            L55 200
            L62 300
            L90 300
            Z
          "
          className={isActive("sleeve")}
        />

        {/* RIGHT SLEEVE */}
        <path
          d="
            M210 160
            L245 200
            L237 300
            L210 300
            Z
          "
          className={isActive("sleeve")}
        />

        {/* MAIN BODY */}
        <path
          d="
            M95 160
            Q120 140 150 140
            Q180 140 205 160
            L205 330
            Q150 350 95 330
            Z
          "
          className={isActive("length")}
        />

        {/* SHOULDER */}
        <line
          x1="95"
          y1="160"
          x2="205"
          y2="160"
          className={isActive("shoulder")}
        />

        {/* CHEST */}
        <line
          x1="105"
          y1="210"
          x2="195"
          y2="210"
          className={isActive("chest")}
        />

        {/* WAIST */}
        <line
          x1="105"
          y1="260"
          x2="195"
          y2="260"
          className={isActive("waist")}
        />

        {/* BAN COLLAR (Same as Kameez) */}
        <path
          d="
            M120 140
            Q150 110 180 140
            L180 160
            Q150 170 120 160
            Z
          "
          className={isActive("collar")}
        />

        {/* BUTTON PLACKET */}
        <line x1="150" y1="160" x2="150" y2="300" className="placket" />

        {/* RIGHT CHEST POCKET */}
        <path
          d="
            M165 190
            L195 190
            L195 215
            L180 225
            L165 215
            Z
          "
          className={isActive("pocket")}
        />

        {/* LEFT CUFF */}
        <rect
          x="61"
          y="290"
          width="30"
          height="18"
          className={
            activeField == "cuff" ? isActive("cuff") : isActive("armhole")
          }
        />

        {/* RIGHT CUFF */}
        <rect
          x="209"
          y="290"
          width="30"
          height="18"
          className={
            activeField == "cuff" ? isActive("cuff") : isActive("armhole")
          }
        />
      </svg>
    </motion.div>
  );
};

export default ShirtPreview;
