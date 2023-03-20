
import { ProSidebarProvider } from 'react-pro-sidebar';

import Dashboard from './pages/dashboard'
import './App.scss';

function App() {
  return (
    <ProSidebarProvider>
      <Dashboard />
    </ProSidebarProvider>
  );
}

export default App;
