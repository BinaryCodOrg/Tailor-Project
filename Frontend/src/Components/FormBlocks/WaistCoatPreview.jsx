import React from "react";
import { motion } from "framer-motion";

const WaistCoatPreview = ({ activeField }) => {
  const isActive = (part) => (activeField === part ? "highlight" : "outline");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="shirt-svg-container p-0"
    >
      <svg viewBox="0 0 300 420" className="shirt-svg">
        {/* MAIN BODY */}
        <path
          d="
            M95 160
            Q120 140 150 140
            Q180 140 205 160
            L205 340
            Q150 360 95 340
            Z
          "
          className={isActive("length")}
        />

        {/* SHOULDER LINE */}
        <line
          x1="95"
          y1="160"
          x2="205"
          y2="160"
          className={isActive("shoulder")}
        />

        {/* CHEST LINE */}
        <line
          x1="105"
          y1="210"
          x2="195"
          y2="210"
          className={isActive("chest")}
        />

        {/* WAIST LINE */}
        <line
          x1="105"
          y1="268"
          x2="195"
          y2="268"
          className={isActive("waist")}
        />

        {/* HEM LINE */}
        <line x1="100" y1="328" x2="200" y2="328" className={isActive("hem")} />

        {/* LEFT ARMHOLE */}
        <path
          d="
            M95 160
            Q80 180 82 210
            L95 210
            Z
          "
          className={isActive("neck")}
          style={{ fill: "none" }}
        />

        {/* RIGHT ARMHOLE */}
        <path
          d="
            M205 160
            Q220 180 218 210
            L205 210
            Z
          "
          className={isActive("neck")}
          style={{ fill: "none" }}
        />

        {/* V-NECK COLLAR */}
        <path
          d="
            M120 140
            L150 190
            L180 140
          "
          className={isActive("neck")}
          style={{ fill: "none" }}
        />

        {/* NECK NOTCH LEFT */}
        <path
          d="
            M120 140
            Q135 130 150 140
          "
          className={isActive("neck")}
          style={{ fill: "none" }}
        />

        {/* NECK NOTCH RIGHT */}
        <path
          d="
            M150 140
            Q165 130 180 140
          "
          className={isActive("neck")}
          style={{ fill: "none" }}
        />

        {/* LEFT LAPEL */}
        <path
          d="
            M120 140
            L105 165
            L130 190
            L150 190
            Z
          "
          className={isActive("neck")}
        />

        {/* RIGHT LAPEL */}
        <path
          d="
            M180 140
            L195 165
            L170 190
            L150 190
            Z
          "
          className={isActive("neck")}
        />

        {/* BUTTON PLACKET */}
        <line x1="150" y1="190" x2="150" y2="320" className="placket" />

        {/* BUTTONS */}
        <circle cx="150" cy="215" r="4" className="placket" />
        <circle cx="150" cy="245" r="4" className="placket" />
        <circle cx="150" cy="275" r="4" className="placket" />
        <circle cx="150" cy="305" r="4" className="placket" />

        {/* LEFT WELT POCKET */}
        <path
          d="
            M108 240
            L138 240
            L138 255
            L108 255
            Z
          "
          className={isActive("chest")}
        />

        {/* RIGHT WELT POCKET */}
        <path
          d="
            M162 240
            L192 240
            L192 255
            L162 255
            Z
          "
          className={isActive("chest")}
        />
      </svg>
    </motion.div>
  );
};

export default WaistCoatPreview;
