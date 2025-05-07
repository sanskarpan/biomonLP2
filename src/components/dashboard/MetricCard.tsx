import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { HealthMetricType } from '@/lib/types';

interface MetricCardProps {
  metric: HealthMetricType;
  className?: string;
}

const MetricCard = ({ metric, className }: MetricCardProps) => {
  const isPositiveChange = metric.change > 0;
  const changeColor = isPositiveChange ? 'text-green-500' : 'text-red-500';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={cn("overflow-hidden", className)}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">{metric.title}</h3>
            <div className={`flex items-center text-xs font-medium ${changeColor}`}>
              {isPositiveChange ? (
                <ArrowUp className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 mr-1" />
              )}
              {Math.abs(metric.change)}%
            </div>
          </div>
          
          <div className="flex items-baseline gap-1">
            <span className={`text-3xl font-bold text-${metric.color}`}>{metric.value}</span>
            {metric.unit && <span className="text-sm text-muted-foreground">{metric.unit}</span>}
          </div>
          
          <div className="mt-4 h-1 w-full bg-muted overflow-hidden rounded-full">
            <motion.div
              className={`h-full bg-${metric.color}`}
              initial={{ width: 0 }}
              animate={{ width: `${typeof metric.value === 'number' ? metric.value : 50}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MetricCard;