import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AreaGraph = ({ title, areaChartData }) => {
  return (
    <div style={{ width: "58%", height: 310, maxWidth: 800 }}>
      <h2 className="text-center font-semibold text-xl mb-5">{title}</h2>

      <ResponsiveContainer>
        <AreaChart
          width={430}
          height={300}
          data={areaChartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
					</linearGradient> */}
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="45%" stopColor="#6ee7b7" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#6ee7b7" stopOpacity={0} />
            </linearGradient>
            {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
					</linearGradient> */}
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {/* <Area
					type="monotone"
					dataKey="uv"
					stroke="#8884d8"
					fillOpacity={1}
					fill="url(#colorUv)"
					/> */}
          <Area
            type="monotone"
            dataKey="Issues"
            stroke="green"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          {/* <Area
					type="monotone"
					dataKey="pv"
					stroke="#82ca9d"
					fillOpacity={1}
					fill="url(#colorPv)"
					/> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaGraph;
