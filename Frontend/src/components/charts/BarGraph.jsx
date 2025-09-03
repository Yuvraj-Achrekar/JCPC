import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarGraph = ({ barData }) => {
  console.log(barData[0].name);

  return (
    <div style={{ width: "100%", height: 200, maxWidth: 800 }}>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={barData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip /> */}
          <Legend />
          <Bar
            dataKey={Object.keys(barData[0])[1]}
            fill="#1e40af" //#E4C087
            // activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey={Object.keys(barData[0])[2]}
            fill="#1fc75e" //#BC7C7C
            // activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
