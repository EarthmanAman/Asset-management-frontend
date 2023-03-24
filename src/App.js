
import { ProSidebarProvider } from 'react-pro-sidebar';

import Dashboard from './pages/dashboard'
import './App.scss';
import RoutesComponent from './routes';

function App() {
  return (
    <ProSidebarProvider>
      <RoutesComponent />
    </ProSidebarProvider>
  );
}

export default App;
