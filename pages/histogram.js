import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Histogram = ({ data }) => (
  <>
    <h2 className="text-2xl font-bold mt-8">Top 20 Words</h2>
    <div className="w-full h-72">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 30, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="0" label={{ value: 'Words', position: 'insideBottom', offset: -15 }} tick={{ fontSize: 12 }} />
          <YAxis
            label={{
              value: 'Frequency',
              angle: -90,
              position: 'insideLeft',
              style: { textAnchor: 'middle' },
            }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip cursor={{ fillOpacity: 0.3 }} labelStyle={{ fontSize: 14 }} />
          <Bar dataKey="1" fill="#B75CFF" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </>
);

export default Histogram;
