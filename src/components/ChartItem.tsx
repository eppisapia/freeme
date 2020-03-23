import React, { useEffect, useState } from 'react';
import { IonText } from '@ionic/react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

interface ContainerProps extends React.Props<any> {
    labels: string[],
    income: number[],
    expense: number[]
}

interface chartData {
    name: string,
    income: number,
    expense: number
}

const ChartItem: React.FC<ContainerProps> = ({ labels, income, expense }) => {
    const [chartData, setChartData] = useState<chartData[]>([{ name: "", income: 0, expense: 0 }])

    /**
     * UseEffect hook to build the data of the chart when component mount
     */
    useEffect(() => {
        const result: chartData[] = []
        for (let i = 0; i < labels.length; i++) {
            result.push({
                name: labels[i],
                income: income[i],
                expense: expense[i]
            })
        }
        setChartData(result)
    }, []);
    return (
        <div style={{ width: '80%', height: 300 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={chartData}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="linear" dataKey="income" stackId="1" stroke="#3dc2ff" fill="#3dc2ff" dot={true} />
                    <Area type="linear" dataKey="expense" stackId="1" stroke="#eb445a" fill="#eb445a" dot={true} />
                </AreaChart>
            </ResponsiveContainer>
        </div>

    )
}

export default ChartItem;