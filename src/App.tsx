import { Toaster } from '@/components/ui/toaster';
import AppRoutes from './routes';
import './App.css';

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
}

export default App;