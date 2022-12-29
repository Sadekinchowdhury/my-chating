
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Routes from './Routes/Routes';
import EmojiPicker from 'emoji-picker-react';



function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <RouterProvider router={Routes}></RouterProvider>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
