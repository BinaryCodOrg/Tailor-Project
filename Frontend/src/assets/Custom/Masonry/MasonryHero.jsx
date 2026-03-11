import React from "react";
import { Card } from "antd";
import "./masonryHero.css";

const images = [
  "https://images.unsplash.com/photo-1510001618818-4b4e3d86bf0f",
  "https://images.unsplash.com/photo-1507513319174-e556268bb244",
  "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2",
  "https://images.unsplash.com/photo-1492778297155-7be4c83960c7",
  "https://images.unsplash.com/photo-1508062878650-88b52897f298",
  "https://images.unsplash.com/photo-1506158278516-d720e72406fc",
  "https://images.unsplash.com/photo-1552203274-e3c7bd771d26",
  "https://images.unsplash.com/photo-1528163186890-de9b86b54b51",
  "https://images.unsplash.com/photo-1727423304224-6d2fd99b864c",
  "https://images.unsplash.com/photo-1675090391405-432434e23595",
  "https://images.unsplash.com/photo-1554196967-97a8602084d9",
  "https://images.unsplash.com/photo-1491961865842-98f7befd1a60",
  "https://images.unsplash.com/photo-1721728613411-d56d2ddda959",
  "https://images.unsplash.com/photo-1731901245099-20ac7f85dbaa",
  "https://images.unsplash.com/photo-1617694455303-59af55af7e58",
  "https://images.unsplash.com/photo-1709198165282-1dab551df890",
];

// duplicate images for loop
const loopImages = [...images, ...images, ...images];

const Column = ({ reverse }) => (
  <div className={`column ${reverse ? "reverse" : ""}`}>
    {loopImages.map((img, i) => (
      <img src={img} alt="" />
    ))}
  </div>
);

export default function MasonryHero() {
  return (
    <section className="hero">
      <div className="tilt-wrapper">
        {Array.from({ length: 8 }).map((_, i) => (
          <Column key={i} reverse={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
