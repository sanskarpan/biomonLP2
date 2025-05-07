import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const AlertCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card className="overflow-hidden border-red-200/20 bg-gradient-to-br from-red-900/10 to-background">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-red-500/20 rounded-full p-2 text-red-500">
              <AlertTriangle className="h-5 w-5" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold">Fasting Glucose Alert</h3>
                <Badge variant="destructive" className="text-[10px]">Attention Required</Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                Your fasting glucose is trending high (103 mg/dL) compared to your baseline (92 mg/dL).
                This may indicate reduced insulin sensitivity.
              </p>
              
              <div className="flex flex-col xs:flex-row gap-2">
                <Button variant="destructive" size="sm">View Details</Button>
                <Button variant="outline" size="sm">Suggested Actions</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AlertCard;