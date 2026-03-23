import React from "react";
import { motion } from "framer-motion";

const KameezPreview = ({ activeField }) => {
  const isActive = (part) => (activeField === part ? "highlight" : "outline");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="kameez-svg-container  p-0"
    >
      <svg viewBox="0 0 300 600" className="kameez-svg">
        {/* LEFT SLEEVE */}
        <path
          d="M40 180 
             Q20 220 40 320 
             L60 320 
             Q55 220 75 180 Z"
          className={
            activeField == "sleeveRound"
              ? isActive("sleeveRound")
              : isActive("sleeve")
          }
        />

        {/* RIGHT SLEEVE */}
        <path
          d="M260 180 
             Q280 220 260 320 
             L240 320 
             Q245 220 225 180 Z"
          className={
            activeField == "sleeveRound"
              ? isActive("sleeveRound")
              : isActive("sleeve")
          }
        />

        {/* MAIN BODY */}
        <path
          d="M75 180
             Q100 150 150 150
             Q200 150 225 180
             L225 520
             Q150 550 75 520 Z"
          className={isActive("length")}
        />

        {/* SHOULDER LINE */}
        <line
          x1="75"
          y1="180"
          x2="225"
          y2="180"
          className={isActive("shoulder")}
        />

        {/* CHEST LINE */}
        <line
          x1="95"
          y1="230"
          x2="205"
          y2="230"
          className={isActive("chest")}
        />

        {/* WAIST LINE */}
        <line
          x1="90"
          y1="300"
          x2="210"
          y2="300"
          className={isActive("waist")}
        />

        {/* HIP / GHARA */}
        <line x1="85" y1="420" x2="215" y2="420" className={isActive("hip")} />

        {/* BAN COLLAR */}
        <path
          d="M120 140
             Q150 110 180 140
             L180 160
             Q150 170 120 160 Z"
          className={isActive("collar")}
        />

        {/* FRONT PLACKET */}
        <line x1="150" y1="160" x2="150" y2="300" className="placket" />

        {/* CUFF LEFT */}
        <rect
          x="50"
          y="310"
          width="30"
          height="25"
          className={
            activeField == "armhole" ? isActive("armhole") : isActive("sleeve")
          }
        />

        {/* CUFF RIGHT */}
        <rect
          x="220"
          y="310"
          width="30"
          height="25"
          className={
            activeField == "armhole" ? isActive("armhole") : isActive("sleeve")
          }
        />
      </svg>
    </motion.div>
  );
};

export default KameezPreview;
