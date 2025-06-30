import flowSvg from "@assets/flow_svg.svg";

export default function FlowDiagram() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <img 
        src={flowSvg} 
        alt="Flow diagram del processo AI Neuratio"
        className="w-full h-auto"
        style={{ background: "transparent" }}
      />
    </div>
  );
}
