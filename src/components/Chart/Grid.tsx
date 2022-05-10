import { AreaChart, XAxis, YAxis, CartesianGrid } from "recharts";
const data = [
  {
    name: "Lable 1",
  },
  {
    name: "Lable 2",
  },
  {
    name: "Lable 3",
  },
  {
    name: "Lable 4",
  },
];
export default function Grid(): JSX.Element {
  return (
    <div className="avatar-project-chart-wrapper">
      <AreaChart
        width={434}
        height={273}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="name" axisLine={{ stroke: "#883DA8" }} />
        <YAxis
          ticks={[-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8]}
          minTickGap={1}
          axisLine={{ stroke: "#883DA8" }}
        />
        <CartesianGrid stroke="#883DA8" />
      </AreaChart>
    </div>
  );
}
