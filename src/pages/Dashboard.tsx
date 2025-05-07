import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GLUCOSE_DATA, HEALTH_METRICS, HEART_RATE_DATA, SLEEP_DATA } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MetricCard from '@/components/dashboard/MetricCard';
import LineChart from '@/components/dashboard/LineChart';
import AlertCard from '@/components/dashboard/AlertCard';
import { ArrowLeft, BellRing, CalendarClock, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  useEffect(() => {
    // Update page title
    document.title = "Dashboard Preview | Biomon";
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="pt-16">
      <div className="bg-muted/30 border-b py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Link 
                  to="/"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1"
                >
                  <ArrowLeft className="h-3 w-3" /> Back to home
                </Link>
                <Badge variant="outline" className="text-xs">Preview</Badge>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mt-2">Your Health Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <CalendarClock className="mr-2 h-4 w-4" />
                Last 7 Days
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <BellRing className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {HEALTH_METRICS.map((metric) => (
            <motion.div key={metric.id} variants={itemVariants}>
              <MetricCard metric={metric} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mb-8">
          <AlertCard />
        </div>
        
        <Tabs defaultValue="charts" className="mb-8">
          <TabsList>
            <TabsTrigger value="charts">Charts</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>
          <TabsContent value="charts" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LineChart 
                title="Heart Rate" 
                data={HEART_RATE_DATA} 
                yAxisLabel="BPM"
                color="hsl(var(--chart-1))"
              />
              <LineChart 
                title="Sleep Duration" 
                data={SLEEP_DATA} 
                yAxisLabel="Hours"
                color="hsl(var(--chart-4))"
              />
              <LineChart 
                title="Fasting Glucose" 
                data={GLUCOSE_DATA} 
                yAxisLabel="mg/dL"
                color="hsl(var(--chart-2))"
              />
              <LineChart 
                title="Recovery Score" 
                data={SLEEP_DATA.map(d => ({ ...d, value: d.value * 10 }))} 
                yAxisLabel="Score"
                color="hsl(var(--chart-5))"
              />
            </div>
          </TabsContent>
          <TabsContent value="insights" className="pt-6">
            <div className="bg-card border rounded-lg p-6 text-center">
              <p className="text-muted-foreground">
                This is a preview dashboard with sample data. Connect your devices and upload lab results to see your personalized insights.
              </p>
              <Button className="mt-4" asChild>
                <Link to="/contact">Join the Beta</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="recommendations" className="pt-6">
            <div className="bg-card border rounded-lg p-6 text-center">
              <p className="text-muted-foreground">
                This is a preview dashboard with sample data. Connect your devices and upload lab results to see your personalized recommendations.
              </p>
              <Button className="mt-4" asChild>
                <Link to="/contact">Join the Beta</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;