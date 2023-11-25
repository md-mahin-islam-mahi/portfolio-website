import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
