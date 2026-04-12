"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 85 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 75 },
    { name: "Next.js", value: 70 },
];

export default function SkillChart() {
    return (
        <div className="bg-base-200">
            <div className="  container mx-auto px-4 py-6">
            {/* responsive wrapper */}
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        {/* X-axis = % */}
                        <XAxis type="number" domain={[0, 100]} />

                        {/* Y-axis = skill name */}
                        <YAxis type="category" dataKey="name" width={100} />

                        <Tooltip />

                        <Bar dataKey="value" fill="#22c55e" radius={[0, 6, 6, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
        </div>
    );
}