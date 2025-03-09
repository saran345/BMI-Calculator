import * as React from 'react';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

 const getGaugeColor=(value)=>{
    if(value<18.5) return "blue";
    if(value<25) return "green";
    if(value<30) return "orange";
    if(value<35) return "red";
    return "darkred";

 };
 const getLabelText=(value)=>{
    if(value<18.5) return "Underweight";
    if(value<25) return "Normal";
    if(value<30) return "Overweight";
    if(value<35) return "Obese class i";
    return "Obese class ii";

 };




export default function Display({value}) {

  const color=getGaugeColor(value);
  const label=getLabelText(value);

  return (
    <GaugeContainer
      width={200}
      height={200}
      startAngle={-110}
      endAngle={110}
      value={value?Number(value):0}
    >
      <GaugeReferenceArc />
      <GaugeValueArc style={{fill:color}} />
      <GaugePointer />
      <text x="100" y="110" textAnchor="middle" fontSize="20" fill="black" fontWeight="bold">
        {value || 0}
      </text>

      <text  x="100" y="195" textAnchor="middle" fontSize="21"  fill={color} fontWeight="bold">
        {label}
      </text>

    </GaugeContainer>
  );
}
