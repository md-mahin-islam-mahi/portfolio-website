import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Spinner from './Components/Global/Spinner/Spinner';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Toaster />
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
