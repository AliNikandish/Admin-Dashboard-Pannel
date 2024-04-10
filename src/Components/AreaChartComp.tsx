import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'فروردین',
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'اردیبهشت',
    uv: 30,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'خرداد',
    uv: 60,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'تیر',
    uv: 90,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'مرداد',
    uv: 120,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'شهریور',
    uv: 150,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'مهر',
    uv: 180,
    pv: 4300,
    amt: 2100,
  },
];


const AreaChartComp = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#7f5ea6" fill="#7f5ea6" />
          </AreaChart>
        </ResponsiveContainer>
      );
}

export default AreaChartComp