import { useId } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ChartDataPoint } from '@/lib/types';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
  data: ChartDataPoint[];
}

const CustomTooltip = ({ active, payload, label, data }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const dataPoint = data.find((p) => p.date === label);
    
    return (
      <div className="bg-popover p-3 border rounded-lg shadow-md">
        <p className="font-medium">{label}</p>
        <p className="text-[hsl(var(--chart-1))]">Value: {payload[0].value}</p>
        {dataPoint?.marker && (
          <div className="mt-2 pt-2 border-t">
            <Badge variant="outline" className="mb-1">{dataPoint.marker}</Badge>
            {dataPoint.label && <p className="text-xs text-muted-foreground">{dataPoint.label}</p>}
          </div>
        )}
      </div>
    );
  }
  
  return null;
};

interface LineChartProps {
  title: string;
  data: ChartDataPoint[];
  yAxisLabel?: string;
  color?: string;
}

const LineChart = ({
  title,
  data,
  yAxisLabel = '',
  color = "var(--chart-1)"
}: LineChartProps) => {
  const id = useId();
  
  return (
    <Card className="w-full h-[300px]">
      <CardHeader className="pb-0">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ResponsiveContainer width="100%" height={220}>
          <RechartsLineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id={`color-${id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }} 
              tickLine={false}
              axisLine={{ stroke: 'hsl(var(--muted))' }}
              className="text-muted-foreground text-xs"
            />
            <YAxis 
              tickLine={false}
              axisLine={{ stroke: 'hsl(var(--muted))' }}
              className="text-muted-foreground text-xs"
              label={{ 
                value: yAxisLabel, 
                angle: -90, 
                position: 'insideLeft',
                className: "text-muted-foreground fill-muted-foreground text-xs" 
              }}
            />
            <Tooltip content={<CustomTooltip data={data} />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              activeDot={{ r: 6, stroke: color, strokeWidth: 2, fill: 'hsl(var(--background))' }}
              dot={{ r: 4, stroke: color, strokeWidth: 2, fill: 'hsl(var(--background))' }}
              isAnimationActive={true}
              animationDuration={1500}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChart;