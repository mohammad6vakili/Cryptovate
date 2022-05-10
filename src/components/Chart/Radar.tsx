import { Radar, RadarChart, PolarAngleAxis, PolarGrid } from "recharts";

const data = [
  {
    subject: "Label 1",
    A: 120,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Label 2",
    A: 78,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Label 3",
    A: 66,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Label 4",
    A: 69,
    B: 100,
    fullMark: 150,
  },
];

export default function ChartRadar() {
  return (
    <>
      <RadarChart
        cx={240}
        cy={215}
        outerRadius={65}
        width={400}
        height={400}
        data={data}
        style={{ color: "transparent" }}
      >
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="Navid"
          dataKey="B"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={1}
          style={{ color: "#4E59DE", zIndex: 1 }}
        />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={1}
          style={{ color: "#4399F7", zIndex: 2 }}
        />
      </RadarChart>
    </>
  );
}
