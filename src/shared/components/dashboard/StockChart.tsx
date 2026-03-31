import {
    XAxis,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from "recharts"

const data = [
    { name: "Fév", value: 3000 },
    { name: "Mar", value: 3500 },
    { name: "Avr", value: 2800 },
    { name: "Mai", value: 4000 },
    { name: "Juin", value: 4500 },
]

export default function StockChart() {
    return (
        <div className="w-full h-[300px]">
            <ResponsiveContainer>
                <AreaChart data={data}>

                    {/* Axe X */}
                    <XAxis
                        dataKey="name"
                        stroke="#94A3B8"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />

                    {/* Tooltip */}
                    <Tooltip
                        contentStyle={{
                            background: "white",
                            borderRadius: "8px",
                            border: "1px solid #e5e7eb"
                        }}
                    />

                    {/* Zone */}
                    <defs>
                        <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="var(--color-primary)"
                        fill="url(#colorStock)"
                        strokeWidth={3}
                    />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}