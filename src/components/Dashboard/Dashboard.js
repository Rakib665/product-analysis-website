import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='grid m-10'>
            <div className='line-chart'>
                <h2 className='text-3xl font-serif text-blue-500 underline'>Line-Chart</h2>
                <LineChart height={470} width={600} data={data}>
                    <Line type='monotoneX' dataKey='sell' stroke="#8884d8"></Line>
                    <Line type='monotone' dataKey='investment'></Line>
                    <XAxis dataKey='month'></XAxis>
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <div className='bar-chart'>
                <h2 className='text-3xl font-serif text-orange-500 underline'>Bar-Chart</h2>
                <BarChart height={500} width={600} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />

                </BarChart>
            </div>
            <div className="pie-chart">
                <h2 className='text-3xl font-serif text-purple-500 underline'>Pie-Chart</h2>

                <PieChart width={730} height={250}>
                    <Pie data={data} dataKey="investment" nameKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="sell" nameKey="sell" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </div>
            <div className="radar-chart">
                <RadarChart outerRadius={90} width={730} height={250} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="month" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Investment" dataKey="investment" stroke="#8884d8" fill="#8884d9" fillOpacity={0.6} />
                    <Radar name="Sell" dataKey="sell" stroke="#82ca9d" fill="#82ca9c" fillOpacity={0.6} />
                    <Radar name="Revenue" dataKey="revenue" stroke="#82ca9e" fill="#82ca9e" fillOpacity={0.6} />
                    <Legend />
                </RadarChart>
            </div>
        </div>

    );
};

export default Dashboard;