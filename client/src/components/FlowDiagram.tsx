import { useEffect, useState } from "react";
import flowSvg from "@assets/flow_svg.svg";
import flowSvgVertical from "@/assets/flow_svg_vertical.svg";

export default function FlowDiagram() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <img
        src={isMobile ? flowSvgVertical : flowSvg}
        alt="Flow diagram del processo AI Neuratio"
        className="w-full h-auto"
        style={{ background: "transparent" }}
      />
    </div>
  );
}
